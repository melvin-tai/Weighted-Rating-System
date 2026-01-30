const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const previewContent = document.getElementById('previewContent');
const rankBtn = document.getElementById('rankBtn');
const status = document.getElementById('status');

let parsedData = null;

fileInput?.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (!file) return;

  status.textContent = 'Parsing CSV…';

  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: (results) => {
      parsedData = results.data;
      previewContent.textContent = parsedData.slice(0, 5).map(r => JSON.stringify(r)).join('\n');
      preview.style.display = 'block';
      rankBtn.disabled = false;
      status.textContent = `Loaded ${parsedData.length} rows`;
    }
  });
});

rankBtn?.addEventListener('click', () => {
  if (!parsedData) return;

  status.textContent = 'Applying weighted ranking…';

  const m = 50;
  const C = parsedData.reduce((a, b) => a + (b.rating || 0), 0) / parsedData.length;

  const ranked = parsedData.map(row => {
    const R = row.rating || 0;
    const v = row.votes || 0;
    const score = (v / (v + m)) * R + (m / (v + m)) * C;
    return { ...row, weighted_score: Number(score.toFixed(4)) };
  }).sort((a, b) => b.weighted_score - a.weighted_score);

  const csv = Papa.unparse(ranked);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'weighted_ranked_output.csv';
  a.click();

  status.textContent = 'Ranking complete. File downloaded.';
});
