function checkHealth({ name, health }) {
  const healthy = 'green';
  const wounded = 'yellow';
  const critical = 'red';

  console.log(name);

  if (health > 50) {
    return healthy;
  }
  if (health <= 50 && health >= 15) {
    return wounded;
  }
  return critical;
}

export default checkHealth;
