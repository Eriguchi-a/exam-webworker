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
  const maxNum = getCountNum()
  
  if (!maxNum) {
    $output.innerText = '数字を入力してください。';
    return
  }

  let result;

  for (var i = 0; i <= Number(maxNum); i++) {
    result = i;
  }

  $output.innerText = `通常のカウントが完了しました。${result}`;
});

document.getElementById('js-worker-countup').addEventListener('click', function () {
    const maxNum = getCountNum()
  
  if (!maxNum) {
    $output.innerText = '数字を入力してください。';
    return
  }

  // worker作成
  const worker = new Worker('js/worker.js');

  // workerからのメッセージを受け取る
  worker.addEventListener('message', function (e) {
    $output.innerText = e.data;
  }, false);

  worker.postMessage(maxNum);
});

const getCountNum = () => {
  const value = document.getElementById('countNum').value
  if (!value || isNaN(value)) {
    return false
  }
  return value
}
