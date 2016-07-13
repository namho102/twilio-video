var accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzk1ZTM3MTcyNDQzNGFhMjQ5N2ViMGM1ZDliMTZhZTc2LTE0NjgzNzM1NTgiLCJpc3MiOiJTSzk1ZTM3MTcyNDQzNGFhMjQ5N2ViMGM1ZDliMTZhZTc2Iiwic3ViIjoiQUM3MDVmODY4ZjRiOWVmYzliNzdjMzM3Njc4ZTZkNmQyNiIsImV4cCI6MTQ2ODM3NzE1OCwiZ3JhbnRzIjp7ImlkZW50aXR5IjoibG9jYWwiLCJydGMiOnsiY29uZmlndXJhdGlvbl9wcm9maWxlX3NpZCI6IlZTNzkxNjRlMmRlYTQ4YmM3ZTMyZjU2MGRkYmRkMDU5ZjIifX19.eycpYWK2PMLeB_XqnhY376QBSH8mqhPA5qic8lTwysw";

var accessManager = Twilio.AccessManager(accessToken);
var client = Twilio.Conversations.Client(accessManager);

// Begin listening for invites to Twilio Video conversations.
client.listen().then(function() {
  client.on('invite', function(invite) {
    invite.accept().then(onInviteAccepted);
  });
});
