import './jobs'

if (Meteor.isServer) {
  import './server/methods'
  import './server/publications'
  import './server/security'
}
