import { Typography } from '@material-ui/core';
import { FunctionComponent } from './Function';
import { FunctionCategory } from './functions';

export function FunctionCategoryComponent({ name, functions }: FunctionCategory) {
  return (
    <>
      <Typography variant="h2">{name}</Typography>
      {functions.map((func) => (
        <FunctionComponent {...func} />
      ))}
    </>
  );
}
