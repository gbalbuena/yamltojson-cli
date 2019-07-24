import yaml from 'js-yaml';

export function pipe(stream) {
  try {
    var data = yaml.safeLoad(stream);
    console.log(JSON.stringify(data));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
