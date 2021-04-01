import { Tooltip } from '@material-ui/core';
import { ParameterType } from './functions';
import styles from './FunctionReference.module.css';

interface ParameterTypeComponentProps {
  type: ParameterType;
}

export function ParameterTypeComponent({ type }: ParameterTypeComponentProps) {
  if (type === ParameterType.Any) {
    return (
      <Tooltip title="This parameter may be of any type">
        <span className={styles['parameter-type']}>Any</span>
      </Tooltip>
    );
  } else if (type === ParameterType.ComplexNumber) {
    return (
      <Tooltip
        title={
          <>
            This parameter must be a complex number or one of its subcategories such as a real number.
            <br />
            <br />
            Examples:
            <ul>
              <li>12</li>
              <li>12.34</li>
              <li>
                <em>i</em>
              </li>
              <li>
                5 + 3<em>i</em>
              </li>
            </ul>
          </>
        }
      >
        <span className={styles['parameter-type']}>Complex number</span>
      </Tooltip>
    );
  } else if (type === ParameterType.Integer) {
    return (
      <Tooltip
        title={
          <>
            This parameter must be an integer.
            <br />
            <br />
            Examples:
            <ul>
              <li>-12</li>
              <li>0</li>
              <li>12000</li>
            </ul>
          </>
        }
      >
        <span className={styles['parameter-type']}>Integer</span>
      </Tooltip>
    );
  } else if (type === ParameterType.List) {
    return (
      <Tooltip title="This parameter must be a list">
        <span className={styles['parameter-type']}>List</span>
      </Tooltip>
    );
  } else if (type === ParameterType.Matrix) {
    return (
      <Tooltip title="This parameter must be a matrix">
        <span className={styles['parameter-type']}>Matrix</span>
      </Tooltip>
    );
  } else if (type === ParameterType.NaturalNumber) {
    return (
      <Tooltip title="This parameter must be a natural number">
        <span className={styles['parameter-type']}>Natural number</span>
      </Tooltip>
    );
  } else if (type === ParameterType.PValue) {
    return (
      <Tooltip title="This parameter must be a p-value (real number in the range 0-1)">
        <span className={styles['parameter-type']}>P-value</span>
      </Tooltip>
    );
  } else if (type === ParameterType.RealNumber) {
    return (
      <Tooltip
        title={
          <>
            This parameter must be a real number
            <ul>
              <li>-12</li>
              <li>12.34</li>
              <li>
                <em>π</em>
              </li>
            </ul>
          </>
        }
      >
        <span className={styles['parameter-type']}>Real number</span>
      </Tooltip>
    );
  } else if (type === ParameterType.SquareMatrix) {
    return (
      <Tooltip title="This parameter must be a square-shaped matrix">
        <span className={styles['parameter-type']}>Square matrix</span>
      </Tooltip>
    );
  } else if (type === ParameterType.Variable) {
    return (
      <Tooltip title="This parameter must be a variable">
        <span className={styles['parameter-type']}>Variable</span>
      </Tooltip>
    );
  }

  return null;
}
