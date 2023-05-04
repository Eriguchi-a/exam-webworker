let result;
// mainからのメッセージを受け取る
self.addEventListener('message', function (e) {
  for (var i = 0; i < 1e9; i++) {
    result = i;
  }

  self.postMessage(`web workerでのカウントが完了しました。${result}`);
}, false);