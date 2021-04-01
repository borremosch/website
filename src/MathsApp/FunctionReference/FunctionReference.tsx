import { Typography } from '@material-ui/core';
import { FunctionCategoryComponent } from './FunctionCategory';
import { FUNCTION_CATEGORIES } from './functions';

export function FunctionReference() {
  return (
    <>
      <Typography variant="h1">Function reference</Typography>

      {FUNCTION_CATEGORIES.map((category, i) => (
        <FunctionCategoryComponent key={i} {...category} />
      ))}
    </>
  );
}
