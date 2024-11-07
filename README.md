# Song Share

Song Share is a social media app designed to deepen connections by sharing music. Users can share favorite songs on their profile, view and interact with a feed of friends' shared songs, and explore new music through their social network.

## Key Features

- **Secure Login**: Authentication over HTTPS for safe user access.
- **Song Sharing**: Post favorite songs to a personal profile or a public "Friends" feed.
- **Edit and Delete**: Users can manage both their song posts and comments.
- **Interaction**: View friends' posts and leave comments.

## Design Philosophy

Music is a universal language, and Song Share enhances this by creating a shared musical experience. Users can post, share, and discuss music, making it a platform to explore new songs and reconnect over shared tastes.

## Deployment & Server Access

To access the server:
- SSH Command: `ssh -i ~/Desktop/CS260/AshlynDunn16.pem ubuntu@260projectad.click`
- Deployment: `./deployWebsite.sh -k ~/Desktop/CS260/AshlynDunn16.pem -h 260projectad.click`

### Notes on GitHub Workflow

From this project, I improved my understanding of version control:
1. **Push to GitHub**:
   - Make updates, commit, and push.
2. **Pull from GitHub**:
   - Make updates, commit, and pull to sync with GitHub.

In case of merge conflicts, VS Code provides an easy-to-use interface for resolving them.

### Additional Notes on Development & Tools

- **CSS and Flex**: Improved skills in layout design using Flexbox.
- **JavaScript & HTML Integration**: Learned effective local storage usage, login simulation, and interaction between HTML and JS files.
- **WebSocket Integration**: Enabled real-time, two-way client-server communication for user comments and interaction.
- **React**: Developed familiarity with React, setting up dependencies, and debugging with `launch.json` in VS Code.

## Acknowledgements

Thanks to Simon for additional notes on deploying with `deployService.sh`, WebSocket integration, and other development tips.
