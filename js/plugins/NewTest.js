
// 初始
console.log("Hello, RPG Maker MV!");

// 持續更新
Scene_Map.prototype.update = function() {
    this.updateDestination();
    this.updateMainMultiply();
    if (this.isSceneChangeOk()) {
        this.updateScene();
    } else if (SceneManager.isNextScene(Scene_Battle)) {
        this.updateEncounterEffect();
    }
    this.updateWaitCount();
    Scene_Base.prototype.update.call(this);

    //-----以上為原先的Code-----//

    if (Input.isTriggered('ok')) {
        console.log('玩家按下了確認');
        
    }

};

// 以下為註解 方便複製 調用    遊戲執行中...打開Console => F12
/*
   1.開關程式 (Bool)
   var switchValue = $gameSwitches.value(1); // 取得開關0001的狀態
   console.log(switchValue); // 在控制台輸出開關的狀態

   2.變數程式 (int)
   var variableValue = $gameVariables.value(1); // 0001的變數ID是1
   console.log(variableValue); // 輸出變數0001的值


*/