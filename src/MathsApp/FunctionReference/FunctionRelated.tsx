import { Link, Typography } from '@material-ui/core';
import { getFunctionIdentifier } from './functions';

interface FunctionRelatedProps {
  related: string[];
}

export function FunctionRelated({ related }: FunctionRelatedProps) {
  return (
    <>
      <Typography variant="h4">Related:</Typography>
      <ul>
        {related.map((relatedItem, i) => (
          <li key={i}>
            <Link href={`#${getFunctionIdentifier(relatedItem)}`}>{relatedItem}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
