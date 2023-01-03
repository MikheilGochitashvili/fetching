const fetchGithubUserFollowers = (user_login, fetchCompleteCallBack) => {
  fetch(`https://api.github.com/users/${user_login}/followers`).then(
    (response) => {
      response.json().then((followers) => {
        fetchCompleteCallBack(followers);
      });
    }
  );
}

export { fetchGithubUserFollowers } ;
