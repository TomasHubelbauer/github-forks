const github = require('github-api');

void async function () {
  const userName = 'tomashubelbauer';

  const forks = [];
  for await (const repository of github.getUsersUserRepos(userName, { onLimitChange: true, onPageChange: true, onWaitChange: true })) {
    if (repository.fork) {
      forks.push(repository);
    }
  }

  if (forks.length === 0) {
    console.log(`No forks in the '${userName}' account.`);
    return;
  }

  const length = Math.max(...forks.map(f => f.name.length));
  for (const fork of forks) {
    console.log(`${fork.name.padEnd(length)} ${fork.html_url}`);
  }
}()
