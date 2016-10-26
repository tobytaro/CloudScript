

// Triggerd when player login the game for the first time
 handlers.StartSetup = function(args) {
    // Add user data
    var setUserData = server.UpdateUserData({
        PlayFabId: currentPlayerId,
        Data: {
            "Skill1": "default",
            "Skill2": "default",
            "Skill3": "default",
            "Gender": "Male",
            "Name": currentPlayerId
        },
        "Permission": "Public"
});

    // Like AddUserVirtualCurrency, it's safer to call UpdatePlayerStatistics from CloudScript
    var updateStatistics = server.UpdatePlayerStatistics({
        PlayFabId: currentPlayerId,
        Statistics: [{
            "StatisticName": "xp",
            "Value": 0
        }, {
            "StatisticName": "level",
            "Value": 0
        }, {
            "StatisticName": "achievement",
            "Value": 0
        }]
    });

}
