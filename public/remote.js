var accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzk1ZTM3MTcyNDQzNGFhMjQ5N2ViMGM1ZDliMTZhZTc2LTE0NjgzNzM2MTUiLCJpc3MiOiJTSzk1ZTM3MTcyNDQzNGFhMjQ5N2ViMGM1ZDliMTZhZTc2Iiwic3ViIjoiQUM3MDVmODY4ZjRiOWVmYzliNzdjMzM3Njc4ZTZkNmQyNiIsImV4cCI6MTQ2ODM3NzIxNSwiZ3JhbnRzIjp7ImlkZW50aXR5IjoicmVtb3RlIiwicnRjIjp7ImNvbmZpZ3VyYXRpb25fcHJvZmlsZV9zaWQiOiJWUzc5MTY0ZTJkZWE0OGJjN2UzMmY1NjBkZGJkZDA1OWYyIn19fQ.P33LvwzyafpOwdPsuenYsPaFpaogd7OY-z8xem76A98';
var accessManager = new Twilio.AccessManager(accessToken);
var client = new Twilio.Conversations.Client(accessManager);
 
client.inviteToConversation('local').then(onInviteAccepted);
