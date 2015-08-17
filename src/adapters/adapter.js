function adapterByOrigin() {
  if (location.origin == DOMAINS.GITHUB)   
    return new GitHub()
  else
    return new GitLab()
}