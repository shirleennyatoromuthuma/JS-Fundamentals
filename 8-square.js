const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log('Missing size');
  process.exit(0);
}


if (size <= 0) {
  process.exit(0);
}


for (let i = 0; i < size; i++) {
  console.log('X'.repeat(size));
}
