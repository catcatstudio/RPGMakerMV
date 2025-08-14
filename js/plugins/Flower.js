

// 等待 600 秒後，執行後續操作
if ($gameTimer.seconds() >= 5) {
    // 這裡可以設置作物成熟、顯示消息等
    //$gameVariables.setValue(1, 2); // 假設變數 1 用來標記作物狀態，設為 2（已成熟）
    $gameMessage.add("你的作物已經成熟，快來收穫吧！");
    $gameTimer.stop(); // 停止計時器
  }
  