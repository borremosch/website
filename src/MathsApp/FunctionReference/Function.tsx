import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { Function, getFunctionIdentifier } from './functions';
import styles from './FunctionReference.module.css';
import { ParameterTypeComponent } from './ParameterType';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FunctionExampleComponent } from './FunctionExample';
import { FunctionRelated } from './FunctionRelated';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';

export function FunctionComponent({ name, symbol, syntax, parameters, description, examples, related }: Function) {
  const syntaxArray: React.ReactNode[] = Array.isArray(syntax) ? syntax : [syntax];

  const { hash } = useLocation();

  const id = useMemo(() => getFunctionIdentifier(name), [name]);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = useCallback(() => setIsExpanded((wasExpanded) => !wasExpanded), []);

  useEffect(() => {
    if (hash.replace(/^#/, '') === id) {
      setIsExpanded(true);
    }
  }, [id, hash]);

  return (
    <>
      <Accordion
        className={styles['accordion']}
        TransitionProps={{ unmountOnExit: true }}
        expanded={isExpanded}
        onClick={toggleExpand}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
          <span className={styles['function-name']}>{name}</span>
          {symbol ? <code className={styles['function-symbol']}> {symbol}</code> : ''}
        </AccordionSummary>
        <AccordionDetails className={styles['function-details']}>
          <Typography variant="h4">Syntax</Typography>
          <ul className={styles['syntax-list']} style={{ listStyleType: syntaxArray.length > 1 ? 'disc' : 'none' }}>
            {syntaxArray.map((syntaxExample, i) => (
              <li key={i}>
                <code>{syntaxExample}</code>
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
                <li key={i}>
                  <code className={styles['parameter']}>{parameter.name}</code>{' '}
                  {parameter.description ? `(${parameter.description}) ` : ''}
                  is of type{' '}
                  {types.map((type, j) => (
                    <span key={j}>
                      {j > 0 ? ' or ' : ''}
                      <ParameterTypeComponent type={type} />
                    </span>
                  ))}{' '}
                </li>
              );
            })}
          </ul>

          <Typography variant="h4">Description</Typography>
          <div>{description}</div>
          {examples?.map((example, i) => (
            <FunctionExampleComponent key={i} {...example} />
          ))}

          {related && <FunctionRelated related={related} />}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
