const $output = document.getElementById('output')

let time = 0;

window.setInterval(function () {
  time++;
  document.getElementById('timer').innerText = time;
}, 100);

document.getElementById('reset').addEventListener('click', function () {
  $output.innerText = '';
  time = 0;
});

document.getElementById('js-normal-countup').addEventListener('click', function () {
  $output.innerText = `カウントスタート`

  let result;

  for (var i = 0; i < 1e9; i++) {
    result = i;
  }

  $output.innerText = `通常のカウントが完了しました。${result}`;
});

document.getElementById('js-worker-countup').addEventListener('click', function () {
  $output.innerText = `カウントスタート`

  // worker作成
  const worker = new Worker('js/worker.js');

  // workerからのメッセージを受け取る
  worker.addEventListener('message', function (e) {
    $output.innerText = e.data;
  }, false);

  worker.postMessage('');
});