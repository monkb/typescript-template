async function main() {}

main()
  .then(() => {
    console.log();
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
