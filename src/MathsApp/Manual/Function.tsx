import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { Function, getFunctionIdentifier } from './functions';
import styles from './FunctionReference.module.css';
import { ParameterTypeComponent } from './ParameterType';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FunctionExampleComponent } from './FunctionExample';
import { FunctionRelated } from './FunctionRelated';

export function FunctionComponent({ name, symbol, syntax, parameters, description, examples, related }: Function) {
  const syntaxArray: React.ReactNode[] = Array.isArray(syntax) ? syntax : [syntax];

  return (
    <>
      <Accordion className={styles['accordion']}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id={getFunctionIdentifier(name)}>
          <span className={styles['function-name']}>{name}</span>
          {symbol ? <code className={styles['function-symbol']}> {symbol}</code> : ''}
        </AccordionSummary>
        <AccordionDetails className={styles['function-details']}>
          <Typography variant="h4">Syntax</Typography>
          <ul style={{ listStyleType: syntaxArray.length > 1 ? 'disc' : 'none' }}>
            {syntaxArray.map((syntaxExample, i) => (
              <li>
                <code key={i}>{syntaxExample}</code>
              </li>
            ))}
          </ul>
          <Typography variant="body1" className={styles['syntax-where']}>
            where:
          </Typography>
          <ul className={styles['syntax-list']} style={{ listStyleType: parameters.length > 1 ? 'disc' : 'none' }}>
            {parameters.map((parameter, i) => {
              const types = Array.isArray(parameter.type) ? parameter.type : [parameter.type];

              return (
                <>
                  <li key={i}>
                    <code className={styles['parameter']}>{parameter.name}</code>{' '}
                    {parameter.description ? `(${parameter.description}) ` : ''}
                    is of type{' '}
                    {types.map((type, j) => (
                      <>
                        {j > 0 ? ' or ' : ''}
                        <ParameterTypeComponent type={type} />
                      </>
                    ))}{' '}
                  </li>
                </>
              );
            })}
          </ul>

          <Typography variant="h4">Description</Typography>
          <div>{description}</div>
          {examples?.map((example) => (
            <FunctionExampleComponent {...example} />
          ))}

          {related && <FunctionRelated related={related} />}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
