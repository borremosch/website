import styles from './Manual.module.css';

export interface FunctionCategory {
  name: string;
  functions: Function[];
}

export enum ParameterType {
  NaturalNumber,
  Integer,
  RealNumber,
  ComplexNumber,
  List,
  Matrix,
  SquareMatrix,
  PValue,
  Any,
  Variable,
}

export interface Function {
  name: string;
  symbol?: React.ReactNode;
  syntax: React.ReactNode;
  parameters: FunctionParameter[];
  description: React.ReactNode;
  examples?: FunctionExample[];
  related?: string[];
}

export interface FunctionExample {
  description: React.ReactNode;
  items: FunctionExampleItem[];
}

export interface FunctionExampleItem {
  type: 'input' | 'output';
  contents: React.ReactNode;
}

export interface FunctionParameter {
  name: string;
  type: ParameterType | ParameterType[];
  description?: string;
}

export function getFunctionIdentifier(name: string) {
  return name
    .toLowerCase()
    .replace(/<(?:.|\n)*?>/gm, '')
    .replace(/[^a-z0-9]/g, '');
}

export const FUNCTION_CATEGORIES: FunctionCategory[] = [
  {
    name: 'Arithmetic functions',
    functions: [
      {
        name: 'Add',
        symbol: '+',
        syntax: 'value1 + value2',
        parameters: [
          {
            name: 'value1',
            type: ParameterType.ComplexNumber,
          },
          {
            name: 'value2',
            type: ParameterType.ComplexNumber,
          },
        ],
        description: 'Adds two numbers together.',
        examples: [
          {
            description: 'Example: adding two numbers',
            items: [
              { type: 'input', contents: '53 + 47' },
              { type: 'output', contents: '100' },
            ],
          },
          {
            description: 'Example: adding two lists',
            items: [
              { type: 'input', contents: '{1, 2} + {3, 4}' },
              { type: 'output', contents: '{4, 6}' },
            ],
          },
          {
            description: 'Example: adding a scalar value to a matrix',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>1</div>
                          <div className={styles['matrix-cell']}>2</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>3</div>
                          <div className={styles['matrix-cell']}>4</div>
                        </div>
                      </div>
                    </div>{' '}
                    + 5
                  </>
                ),
              },
              {
                type: 'output',
                contents: (
                  <>
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>6</div>
                          <div className={styles['matrix-cell']}>7</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>8</div>
                          <div className={styles['matrix-cell']}>9</div>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
            ],
          },
        ],
        related: ['subtract', 'multiply', 'divide'],
      },
      {
        name: 'Subtract',
        symbol: '−',
        syntax: 'value1 − value2',
        parameters: [
          {
            name: 'value1',
            type: ParameterType.ComplexNumber,
          },
          {
            name: 'value2',
            type: ParameterType.ComplexNumber,
          },
        ],
        description: (
          <>
            Subtracts two numbers. Not to be confused with the negate operator, which is a unary operator, applied to
            one value only.
          </>
        ),
        examples: [
          {
            description: 'Example: subtracting two numbers',
            items: [
              { type: 'input', contents: '53 - 47' },
              { type: 'output', contents: '6' },
            ],
          },
          {
            description: 'Example: subtracting a scalar from a list',
            items: [
              { type: 'input', contents: '{7, 9, 11} - 4' },
              { type: 'output', contents: '{3, 5, 7}' },
            ],
          },
        ],
        related: ['negate', 'add', 'multiply', 'divide'],
      },
      {
        name: 'Multiply',
        symbol: '×',
        syntax: 'value1 × value2',
        parameters: [
          {
            name: 'value1',
            type: ParameterType.ComplexNumber,
          },
          {
            name: 'value2',
            type: ParameterType.ComplexNumber,
          },
        ],
        description:
          'Multiplies two numbers. When multiplying two matrices, the multiply operator does not simply multiply the values inside the matrix, but produces the matrix product. To get the matrix product of two matrices, the width of the left operand must be equal to the height of the right operand.',
        examples: [
          {
            description: 'Example: multiplying two numbers',
            items: [
              { type: 'input', contents: '53 × 47' },
              { type: 'output', contents: '2491' },
            ],
          },
          {
            description: 'Example: multiplying a list with a scalar',
            items: [
              { type: 'input', contents: '{7, 9, 11} * 4' },
              { type: 'output', contents: '{28, 36, 44}' },
            ],
          },
          {
            description: 'Example: matrix multiplication',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>4</div>
                          <div className={styles['matrix-cell']}>6</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>-3</div>
                          <div className={styles['matrix-cell']}>8</div>
                        </div>
                      </div>
                    </div>
                    ×
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>7</div>
                          <div className={styles['matrix-cell']}>9</div>
                          <div className={styles['matrix-cell']}>-4</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>2</div>
                          <div className={styles['matrix-cell']}>3</div>
                          <div className={styles['matrix-cell']}>6</div>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
              {
                type: 'output',
                contents: (
                  <>
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>40</div>
                          <div className={styles['matrix-cell']}>54</div>
                          <div className={styles['matrix-cell']}>20</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>-5</div>
                          <div className={styles['matrix-cell']}>-3</div>
                          <div className={styles['matrix-cell']}>60</div>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
            ],
          },
        ],
        related: ['add', 'subtract', 'divide'],
      },
      {
        name: 'Divide',
        symbol: '/',
        syntax: 'value1 / value2',
        parameters: [
          {
            name: 'value1',
            type: ParameterType.ComplexNumber,
            description: 'numerator',
          },
          {
            name: 'value2',
            type: ParameterType.ComplexNumber,
            description: 'denominator, non-zero',
          },
        ],
        description: 'Divides two numbers.',
        examples: [
          {
            description: 'Example: dividing two numbers',
            items: [
              { type: 'input', contents: '20 / 8' },
              { type: 'output', contents: '2.5' },
            ],
          },
          {
            description: 'Example: dividing a list by a scalar',
            items: [
              { type: 'input', contents: '{7, 9, 11} / 2' },
              { type: 'output', contents: '{3.5, 4.5, 5.5}' },
            ],
          },
        ],
        related: ['add', 'subtract', 'multiply'],
      },
      {
        name: 'Negate',
        symbol: '-',
        syntax: '-value',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description:
          'Negates a number. Not to be confused with the subtract operator, which subtracts one value from another.',
        examples: [
          {
            description: 'Example: negating a numbers',
            items: [
              { type: 'input', contents: '-53' },
              { type: 'output', contents: '-53' },
            ],
          },
          {
            description: 'Example: negating a list',
            items: [
              { type: 'input', contents: '-{7, 9, 11}' },
              { type: 'output', contents: '{-7, -9, -11}' },
            ],
          },
          {
            description: 'Example: negating a matrix',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    -
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>4</div>
                          <div className={styles['matrix-cell']}>6</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>-3</div>
                          <div className={styles['matrix-cell']}>8</div>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
              {
                type: 'output',
                contents: (
                  <>
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>-4</div>
                          <div className={styles['matrix-cell']}>-6</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>3</div>
                          <div className={styles['matrix-cell']}>-8</div>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
            ],
          },
        ],
        related: ['add', 'subtract', 'multiply', 'divide'],
      },
    ],
  },

  {
    name: 'Exponentiation functions',
    functions: [
      {
        name: 'power',
        symbol: '^',
        syntax: 'x^y',
        parameters: [
          {
            name: 'x',
            type: ParameterType.ComplexNumber,
            description: 'base',
          },
          {
            name: 'y',
            type: ParameterType.ComplexNumber,
            description: 'exponent',
          },
        ],
        description: (
          <>
            Calculates <code>x</code> raised to the power <code>y</code>.
          </>
        ),
        examples: [
          {
            description: (
              <>
                Example: calculating 2<sup>-2</sup>
              </>
            ),
            items: [
              { type: 'input', contents: '2^-2' },
              { type: 'output', contents: '0.25' },
            ],
          },
          {
            description: 'calculating 4³',
            items: [
              {
                type: 'input',
                contents: '4^3',
              },
              {
                type: 'output',
                contents: '64',
              },
            ],
          },
        ],
        related: ['root', 'square', 'power of e', 'power of 10'],
      },
      {
        name: 'root',
        symbol: (
          <>
            <sup>x</sup>√
          </>
        ),
        syntax: (
          <>
            n<sup>x</sup>√(value)
          </>
        ),
        parameters: [
          {
            name: 'n',
            type: ParameterType.ComplexNumber,
            description: 'degree',
          },
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description: (
          <>
            Calculates the <code>n</code>
            <sup>th</sup> root of <code>value</code>.
          </>
        ),
        examples: [
          {
            description: 'Example: calculating cube root of 125',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    3<sup>x</sup>√(125)
                  </>
                ),
              },
              { type: 'output', contents: '5' },
            ],
          },
          {
            description: (
              <>
                Example: calculating the 5<sup>th</sup> root of 32
              </>
            ),
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    5<sup>x</sup>√(32)
                  </>
                ),
              },
              { type: 'output', contents: '2' },
            ],
          },
        ],
        related: ['power', 'square root'],
      },
      {
        name: 'square',
        symbol: <>x²</>,
        syntax: <>x²</>,
        parameters: [
          {
            name: 'x',
            type: ParameterType.ComplexNumber,
            description: 'base',
          },
        ],
        description: (
          <>
            Calculates the square of <code>x</code>.
          </>
        ),
        examples: [
          {
            description: 'Example: calculate the square of 8',
            items: [
              { type: 'input', contents: '8²' },
              { type: 'output', contents: '64' },
            ],
          },
        ],
        related: ['square root', 'power'],
      },
      {
        name: 'square root',
        symbol: '√',
        syntax: '√(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description: (
          <>
            Calculates the square root of <code>value</code>
          </>
        ),
        examples: [
          {
            description: 'Example: calculate the square root of 49',
            items: [
              { type: 'input', contents: '√(49)' },
              { type: 'output', contents: '7' },
            ],
          },
        ],
        related: ['square', 'root'],
      },
      {
        name: 'power of e',
        symbol: 'e^',
        syntax: 'e^(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
            description: 'exponent',
          },
        ],
        description: (
          <>
            Calculates e raised to the power <code>value</code>
          </>
        ),
        examples: [
          {
            description: (
              <>
                Example: calculate e<sup>iπ</sup>
              </>
            ),
            items: [
              { type: 'input', contents: 'e^(iπ)' },
              { type: 'output', contents: '-1' },
            ],
          },
        ],
        related: ['natural logarithm', 'power', 'power of 10'],
      },
      {
        name: 'natural logarithm',
        symbol: 'ln',
        syntax: 'ln(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
            description: 'non-zero',
          },
        ],
        description: (
          <>
            Calculates the natural logarithm of a number. In other words, the outcome is the exponent to which e must be
            raised, in order to get the input value. In order to get the n-log of a number c, you can use ln(c) / ln(n)
            (see example 2).
          </>
        ),
        examples: [
          {
            description: 'Example: getting natural logarithm of e',
            items: [
              { type: 'input', contents: 'ln(e)' },
              { type: 'output', contents: '1' },
            ],
          },
          {
            description: 'Example: getting the ₂log of 32',
            items: [
              { type: 'input', contents: 'ln(32) / ln(2)' },
              { type: 'output', contents: '5' },
            ],
          },
        ],
        related: ['power of e', 'logarithm'],
      },
      {
        name: 'power of 10',
        symbol: (
          <>
            10<sup>x</sup>
          </>
        ),
        syntax: (
          <>
            10<sup>x</sup>(value)
          </>
        ),
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
            description: 'exponent',
          },
        ],
        description: (
          <>
            Calculates 10 raised to the power <code>value</code>
          </>
        ),
        examples: [
          {
            description: (
              <>
                Example: calculate 10<sup>3</sup>
              </>
            ),
            items: [
              { type: 'input', contents: '10^(3)' },
              { type: 'output', contents: '1000' },
            ],
          },
        ],
        related: ['logarithm', 'power', 'power of e'],
      },
      {
        name: 'logarithm',
        symbol: 'log',
        syntax: 'log(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
            description: 'non-zero',
          },
        ],
        description: (
          <>
            Calculates the <sub>10</sub>log of a number. In other words, the outcome is the exponent to which 10 must be
            raised, in order to get the input value. In order to get the n-log of a number c, you can use log(c) /
            log(n) (see example 2).
          </>
        ),
        examples: [
          {
            description: (
              <>
                Example: getting the <sub>10</sub>log of 100
              </>
            ),
            items: [
              { type: 'input', contents: 'log(100)' },
              { type: 'output', contents: '2' },
            ],
          },
          {
            description: 'Example: getting the ₂log of 32',
            items: [
              { type: 'input', contents: 'log(32) / log(2)' },
              { type: 'output', contents: '5' },
            ],
          },
        ],
        related: ['power of 10', 'natural logarithm'],
      },
      {
        name: 'reciprocal',
        symbol: (
          <>
            x<sup>-1</sup>
          </>
        ),
        syntax: (
          <>
            x<sup>-1</sup>
          </>
        ),
        parameters: [
          {
            name: 'x',
            type: [ParameterType.ComplexNumber, ParameterType.SquareMatrix],
          },
        ],
        description: (
          <>
            Calculates the reciprocal of <code>x</code>, or 1 / <code>x</code>. When applied to a matrix, the reciprocal
            operator returns the inverse matrix.
          </>
        ),
        examples: [
          {
            description: 'Example: getting the reciprocal of 25',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    25<sup>-1</sup>
                  </>
                ),
              },
              { type: 'output', contents: '.04' },
            ],
          },
          {
            description: 'Example: calculating an inverse matrix',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>4</div>
                          <div className={styles['matrix-cell']}>6</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>-3</div>
                          <div className={styles['matrix-cell']}>8</div>
                        </div>
                      </div>
                    </div>
                    <sup>-1</sup>
                  </>
                ),
              },
              {
                type: 'output',
                contents: (
                  <>
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>0.16</div>
                          <div className={styles['matrix-cell']}>-0.12</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>0.06</div>
                          <div className={styles['matrix-cell']}>0.08</div>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
            ],
          },
        ],
        related: ['power'],
      },
    ],
  },

  {
    name: 'Trigonometric functions',
    functions: [
      {
        name: 'sine',
        symbol: 'sin',
        syntax: 'sin(∠)',
        parameters: [
          {
            name: '∠value',
            type: ParameterType.ComplexNumber,
            description: 'angle in degrees or radians, depending on the current settings',
          },
        ],
        description: (
          <>
            Calculates the sine of <code>∠value</code>. Depending on the settings, the unit of the input may be either
            radians or degrees.
          </>
        ),
        examples: [
          {
            description: 'Example: calculating the sine of π (degree mode)',
            items: [
              { type: 'input', contents: 'sin(π)' },
              { type: 'output', contents: '0.054803665' },
            ],
          },
          {
            description: 'Example: calculating the sine of π (radian mode)',
            items: [
              { type: 'input', contents: 'sin(π)' },
              { type: 'output', contents: '0' },
            ],
          },
        ],
        related: ['inverse sine', 'cosine', 'tangent'],
      },
      {
        name: 'cosine',
        symbol: 'cos',
        syntax: 'cos(∠value)',
        parameters: [
          {
            name: '∠value',
            type: ParameterType.ComplexNumber,
            description: 'angle in degrees or radians, depending on the current settings',
          },
        ],
        description: (
          <>
            Calculates the cosine of <code>∠value</code>. Depending on the settings, the unit of the input may be either
            radians or degrees.
          </>
        ),
        examples: [
          {
            description: 'Example: calculating the cosine of 180 (degree mode)',
            items: [
              { type: 'input', contents: 'cos(180)' },
              { type: 'output', contents: '-1' },
            ],
          },
          {
            description: 'Example: calculating the cosine of 180 (radian mode)',
            items: [
              { type: 'input', contents: 'cos(180)' },
              { type: 'output', contents: '-0.59846007' },
            ],
          },
        ],
        related: ['inverse cosine', 'sine', 'tangent'],
      },
      {
        name: 'tangent',
        symbol: 'tan',
        syntax: 'tan(∠)',
        parameters: [
          {
            name: '∠value',
            type: ParameterType.ComplexNumber,
            description: 'angle in degrees or radians, depending on the current settings',
          },
        ],
        description: (
          <>
            Calculates the tangent of <code>∠value</code>. Depending on the settings, the unit of the input may be
            either radians or degrees.
          </>
        ),
        examples: [
          {
            description: 'Example: calculating the tangent of 45 (degree mode)',
            items: [
              { type: 'input', contents: 'tan(45)' },
              { type: 'output', contents: '1' },
            ],
          },
        ],
        related: ['inverse tangent', 'sine', 'cosine'],
      },
      {
        name: 'inverse sine',
        symbol: (
          <>
            sin<sup>-1</sup>
          </>
        ),
        syntax: (
          <>
            sin<sup>-1</sup>(value)
          </>
        ),
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description:
          'Also called the arcsine, calculates the angle of which the sine is equal to the input value. The outcome of the function may be either radians or degrees, depending on the current settings. Note that real number inputs outside of the range [-1, 1] are valid, but will yield complex number results.',
        examples: [
          {
            description: 'Example: calculating the inverse sine of .5 (degree mode)',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    sin<sup>-1</sup>(.5)
                  </>
                ),
              },
              { type: 'output', contents: '30' },
            ],
          },
          {
            description: 'Example: calculating the inverse sine of .5 (radian mode).',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    sin<sup>-1</sup>(.5)
                  </>
                ),
              },
              { type: 'output', contents: '0.523598776' },
              { type: 'input', contents: 'π / 6' },
              { type: 'output', contents: '0.523598776' },
            ],
          },
        ],
        related: ['sine', 'inverse cosine', 'inverse tangent'],
      },
      {
        name: 'inverse cosine',
        symbol: (
          <>
            cos<sup>-1</sup>
          </>
        ),
        syntax: (
          <>
            cos<sup>-1</sup>(value)
          </>
        ),
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description:
          'Also called the arccosine, calculates the angle of which the cosine is equal to the input value. The outcome of the function may be either radians or degrees, depending on the current settings. Note that real number inputs outside of the range [-1, 1] are valid, but will yield complex number results.',
        examples: [
          {
            description: 'Example: calculating the inverse cosine of .5 (degree mode)',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    cos<sup>-1</sup>(.5)
                  </>
                ),
              },
              { type: 'output', contents: '60' },
            ],
          },
          {
            description: 'Example: calculating the inverse cosine of .5 (radian mode).',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    cos<sup>-1</sup>(.5)
                  </>
                ),
              },
              { type: 'output', contents: '1.047197551' },
              { type: 'input', contents: 'π / 3' },
              { type: 'output', contents: '1.047197551' },
            ],
          },
        ],
        related: ['cosine', 'inverse sine', 'inverse tangent'],
      },
      {
        name: 'inverse tangent',
        symbol: (
          <>
            tan<sup>-1</sup>
          </>
        ),
        syntax: (
          <>
            tan<sup>-1</sup>(value)
          </>
        ),
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description:
          'Also called the arctangent, calculates the angle of which the tangent is equal to the input value. The outcome of the function may be either radians or degrees, depending on the current settings.',
        examples: [
          {
            description: 'Example: calculating the inverse tangent of 1 (degree mode)',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    tan<sup>-1</sup>(1)
                  </>
                ),
              },
              { type: 'output', contents: '45' },
            ],
          },
          {
            description: 'Example: calculating the inverse tangent of .5 (radian mode).',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    tan<sup>-1</sup>(1)
                  </>
                ),
              },
              { type: 'output', contents: '0.785398163' },
              { type: 'input', contents: 'π / 4' },
              { type: 'output', contents: '0.785398163' },
            ],
          },
        ],
        related: ['tangent', 'inverse sine', 'inverse cosine'],
      },
    ],
  },

  {
    name: 'List functions',
    functions: [
      {
        name: 'sort ascending',
        syntax: 'sort↑(L)',
        parameters: [
          {
            name: 'L',
            type: ParameterType.List,
            description: 'containing only real values',
          },
        ],
        description: 'Sorts a list in ascending order.',
        examples: [
          {
            description: 'Example: sort a list',
            items: [
              { type: 'input', contents: 'sort↑({7, 1, 3, 9, 2})' },
              { type: 'output', contents: '{1, 2, 3, 7, 9}' },
            ],
          },
        ],
        related: ['sort descending'],
      },
      {
        name: 'sort descending',
        syntax: 'sort↓(L)',
        parameters: [
          {
            name: 'L',
            type: ParameterType.List,
            description: 'containing only real values',
          },
        ],
        description: 'Sorts a list in descending order.',
        examples: [
          {
            description: 'Example: sort a list',
            items: [
              { type: 'input', contents: 'sort↓({7, 1, 3, 9, 2})' },
              { type: 'output', contents: '{9, 7, 3, 2, 1}' },
            ],
          },
        ],
        related: ['sort ascending'],
      },
      {
        name: 'maximum',
        syntax: 'max(L)',
        parameters: [
          {
            name: 'L',
            type: [ParameterType.List, ParameterType.Matrix],
            description: 'non-empty, containing only real values',
          },
        ],
        description: 'Gives the maximum value in a list or matrix.',
        examples: [
          {
            description: 'Example: get maximum value in a list',
            items: [
              { type: 'input', contents: 'max({7, 1, 3, 9, 2})' },
              { type: 'output', contents: '9' },
            ],
          },
        ],
        related: ['minimum'],
      },
      {
        name: 'minimum',
        syntax: 'min(L)',
        parameters: [
          {
            name: 'L',
            type: [ParameterType.List, ParameterType.Matrix],
            description: 'non-empty, containing only real values',
          },
        ],
        description: 'Gives the minimum value in a list or matrix.',
        examples: [
          {
            description: 'Example: get minimum value in a list',
            items: [
              { type: 'input', contents: 'max({7, 1, 3, 9, 2})' },
              { type: 'output', contents: '1' },
            ],
          },
        ],
        related: ['maximum'],
      },
      {
        name: 'range',
        syntax: ['range(max)', 'range(min, max)', 'range(min, max, step)'],
        parameters: [
          {
            name: 'min',
            type: ParameterType.RealNumber,
            description: 'the minimum value in the list (real number)',
          },
          {
            name: 'max',
            type: ParameterType.RealNumber,
            description: 'the maximum value in the list (real number)',
          },
          {
            name: 'step',
            type: ParameterType.RealNumber,
            description: 'non-zero, the difference between elements in the list (real number)',
          },
        ],
        description: (
          <>
            Generates a list containing values from <code>min</code> to <code>max</code>, differing by <code>step</code>
            .
          </>
        ),
        examples: [
          {
            description: 'Example: generate a list with values 1, 2, ..., 10',
            items: [
              { type: 'input', contents: 'range(10)' },
              { type: 'output', contents: '{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}' },
            ],
          },
          {
            description: 'Example: generate a list with values 5, 6, ..., 12',
            items: [
              { type: 'input', contents: 'range(5, 12)' },
              { type: 'output', contents: '{5, 6, 7, 8, 9, 10, 11, 12}' },
            ],
          },
          {
            description: 'Example: generate a list with values 1.9, 1.7, ..., 0.5',
            items: [
              { type: 'input', contents: 'range(1.9, .5, -.2)' },
              { type: 'output', contents: '{1.9, 1.7, 1.5, 1.3, 1.1, 0.9, 0.7, 0.5}' },
            ],
          },
          {
            description: 'Example: calculate the factorial of 9 by using the product operator',
            items: [
              { type: 'input', contents: 'π(range(9))' },
              { type: 'output', contents: '362880' },
              { type: 'input', contents: '9!' },
              { type: 'output', contents: '362880' },
            ],
          },
        ],
      },
      {
        name: 'length',
        syntax: 'length(L)',
        parameters: [
          {
            name: 'L',
            type: ParameterType.List,
          },
        ],
        description: 'Gives the length of a list.',
        examples: [
          {
            description: 'Example: get length of a list',
            items: [
              { type: 'input', contents: 'length({7, 1, 3, 9, 2})' },
              { type: 'output', contents: '5' },
            ],
          },
        ],
      },
      {
        name: 'standard deviation of population',
        symbol: (
          <>
            σ<sub>pop</sub>
          </>
        ),
        syntax: (
          <>
            σ<sub>pop</sub>(L)
          </>
        ),
        parameters: [
          {
            name: 'L',
            type: [ParameterType.List, ParameterType.Matrix],
            description: 'containing a minimum of 2 items',
          },
        ],
        description: 'Calculates the standard deviation of a list or matrix, interpreting it as a population.',
        examples: [
          {
            description: 'Example: get standard deviation of a population',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    σ<sub>pop</sub>({'{7, 1, 3, 9, 2}'})
                  </>
                ),
              },
              { type: 'output', contents: '3.072458299' },
            ],
          },
        ],
        related: ['standard deviation of sample'],
      },
      {
        name: 'standard deviation of sample',
        symbol: (
          <>
            σ<sub>sample</sub>
          </>
        ),
        syntax: (
          <>
            σ<sub>sample</sub>(L)
          </>
        ),
        parameters: [
          {
            name: 'L',
            type: [ParameterType.List, ParameterType.Matrix],
            description: 'containing a minimum of 2 items',
          },
        ],
        description:
          'Calculates the standard deviation of a list or matrix, interpreting it as a sample from a population.',
        examples: [
          {
            description: 'Example: get standard deviation of a sample',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    σ<sub>sample</sub>({'{7, 1, 3, 9, 2}'})
                  </>
                ),
              },
              { type: 'output', contents: '3.435112807' },
            ],
          },
        ],
        related: ['standard deviation of population'],
      },
      {
        name: 'mean',
        symbol: 'μ',
        syntax: 'μ(L)',
        parameters: [
          {
            name: 'L',
            type: [ParameterType.List, ParameterType.Matrix],
            description: 'non-empty',
          },
        ],
        description: 'Calculates the mean of all elements in a list or matrix.',
        examples: [
          {
            description: 'Example: get mean of items in a list',
            items: [
              { type: 'input', contents: 'μ({7, 1, 3, 9, 2})' },
              { type: 'output', contents: '4.4' },
            ],
          },
        ],
        related: ['mean squared', 'median', 'mode'],
      },
      {
        name: 'mean squared',
        symbol: <>μ²</>,
        syntax: <>μ²(L)</>,
        parameters: [
          {
            name: 'L',
            type: [ParameterType.List, ParameterType.Matrix],
            description: 'non-empty',
          },
        ],
        description: 'Calculates the mean of all squares of elements in a list or matrix.',
        examples: [
          {
            description: 'Example: get mean squared of items in a list',
            items: [
              { type: 'input', contents: 'μ²({7, 1, 3, 9, 2})' },
              { type: 'output', contents: '28.8' },
            ],
          },
        ],
        related: ['mean', 'median', 'mode'],
      },
      {
        name: 'median',
        symbol: (
          <>
            μ<sub>1/2</sub>
          </>
        ),
        syntax: (
          <>
            μ<sub>1/2</sub>(L)
          </>
        ),
        parameters: [
          {
            name: 'L',
            type: [ParameterType.List, ParameterType.Matrix],
            description: 'non-empty, containing only real values',
          },
        ],
        description: 'Gives the median of all elements in a list or matrix.',
        examples: [
          {
            description: 'Example: get median of items in a list',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    μ<sub>1/2</sub>({'{7, 1, 3, 9, 2}'})
                  </>
                ),
              },
              { type: 'output', contents: '3' },
            ],
          },
        ],
        related: ['mean', 'mean squared', 'mode'],
      },
      {
        name: 'mode',
        syntax: 'mode(L)',
        parameters: [
          {
            name: 'L',
            type: [ParameterType.List, ParameterType.Matrix],
            description: 'non-empty',
          },
        ],
        description: 'Gives the mode of a list or matrix.',
        examples: [
          {
            description: 'Example: get mode of a list',
            items: [
              { type: 'input', contents: 'mode({7, 1, 3, 9, 2, 1})' },
              { type: 'output', contents: '1' },
            ],
          },
        ],
        related: ['mean', 'mean squared', 'median'],
      },
      {
        name: 'sum',
        symbol: 'σ',
        syntax: 'σ(L)',
        parameters: [
          {
            name: 'L',
            type: [ParameterType.List, ParameterType.Matrix],
          },
        ],
        description: 'Calculates the sum of all elements in a list or matrix.',
        examples: [
          {
            description: 'Example: get sum of all elements in a list',
            items: [
              { type: 'input', contents: 'σ({7, 1, 3, 9, 2})' },
              { type: 'output', contents: '22' },
              { type: 'input', contents: '7 + 1 + 3 + 9 + 2' },
              { type: 'output', contents: '22' },
            ],
          },
        ],
        related: ['product'],
      },
      {
        name: 'product',
        symbol: 'π',
        syntax: 'π(L)',
        parameters: [
          {
            name: 'L',
            type: [ParameterType.List, ParameterType.Matrix],
          },
        ],
        description: 'Calculates the product of all elements in a list or matrix.',
        examples: [
          {
            description: 'Example: get product of all elements in a list',
            items: [
              { type: 'input', contents: 'π({7, 1, 3, 9, 2})' },
              { type: 'output', contents: '378' },
              { type: 'input', contents: '7 × 1 × 3 × 9 × 2' },
              { type: 'output', contents: '378' },
            ],
          },
          {
            description: 'Example: calculate the factorial of 9 by using the product operator',
            items: [
              { type: 'input', contents: 'π(range(9))' },
              { type: 'output', contents: '362880' },
              { type: 'input', contents: '9!' },
              { type: 'output', contents: '362880' },
            ],
          },
        ],
        related: ['sum'],
      },
      {
        name: 'element of',
        symbol: '∈',
        syntax: 'value ∈ L',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
          {
            name: 'L',
            type: ParameterType.List,
          },
        ],
        description: 'Tests whether a value is in a list.',
        examples: [
          {
            description: 'Example: test whether value is in list',
            items: [
              { type: 'input', contents: '9 ∈ {7, 1, 3, 9, 2}' },
              { type: 'output', contents: 'True' },
              { type: 'input', contents: '6 ∈ {7, 1, 3, 9, 2}' },
              { type: 'output', contents: 'False' },
            ],
          },
        ],
        related: ['not element of'],
      },
      {
        name: 'not element of',
        symbol: '∉',
        syntax: 'c ∉ L',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
          {
            name: 'L',
            type: ParameterType.List,
          },
        ],
        description: 'Tests whether a value not is in a list.',
        examples: [
          {
            description: 'Example: test whether value is not in list',
            items: [
              { type: 'input', contents: '9 ∉ {7, 1, 3, 9, 2}' },
              { type: 'output', contents: 'False' },
              { type: 'input', contents: '6 ∉ {7, 1, 3, 9, 2}' },
              { type: 'output', contents: 'True' },
            ],
          },
        ],
        related: ['element of'],
      },
      {
        name: 'union',
        symbol: '∪',
        syntax: 'L₁ ∪ L₂',
        parameters: [
          {
            name: 'L₁',
            type: ParameterType.List,
          },
          {
            name: 'L₂',
            type: ParameterType.List,
          },
        ],
        description: (
          <>
            Returns a new list containing all elements that are either in <code>L₁</code> or in <code>L₂</code>.
            Duplicate elements are removed.
          </>
        ),
        examples: [
          {
            description: 'Example: find union of two lists',
            items: [
              { type: 'input', contents: '{7, 1, 3, 9, 2} ∪ {2, 6, 4, 1, 5}' },
              { type: 'output', contents: '{7, 1, 3, 9, 2, 6, 4, 5}' },
            ],
          },
        ],
        related: ['intersection', 'difference', 'symmetrical difference'],
      },
      {
        name: 'intersection',
        symbol: '∩',
        syntax: 'L₁ ∩ L₂',
        parameters: [
          {
            name: 'L₁',
            type: ParameterType.List,
          },
          {
            name: 'L₂',
            type: ParameterType.List,
          },
        ],
        description: (
          <>
            Returns a new list containing all elements that are both in <code>L₁</code> and in <code>L₂</code>.
            Duplicate elements are removed.
          </>
        ),
        examples: [
          {
            description: 'Example: find intersection of two lists',
            items: [
              { type: 'input', contents: '{7, 1, 3, 9, 2} ∪ {2, 6, 4, 1, 5}' },
              { type: 'output', contents: '{1, 2}' },
            ],
          },
        ],
        related: ['union', 'difference', 'symmetrical difference'],
      },
      {
        name: 'difference',
        symbol: '\\',
        syntax: 'L₁ \\ L₂',
        parameters: [
          {
            name: 'L₁',
            type: ParameterType.List,
          },
          {
            name: 'L₂',
            type: ParameterType.List,
          },
        ],
        description: (
          <>
            Returns a new list containing all elements that are in <code>L₁</code> but not in <code>L₂</code>. Duplicate
            elements are removed.
          </>
        ),
        examples: [
          {
            description: 'Example: find difference of two lists',
            items: [
              { type: 'input', contents: '{7, 1, 3, 9, 2} \\ {2, 6, 4, 1, 5}' },
              { type: 'output', contents: '{7, 3, 9}' },
            ],
          },
        ],
        related: ['union', 'intersection', 'symmetrical difference'],
      },
      {
        name: 'symmetrical difference',
        symbol: 'Δ',
        syntax: 'L₁ Δ L₂',
        parameters: [
          {
            name: 'L₁',
            type: ParameterType.List,
          },
          {
            name: 'L₂',
            type: ParameterType.List,
          },
        ],
        description: (
          <>
            Returns a new list containing all elements that are either in <code>L₁</code> or in <code>L₂</code>, but not
            both. Duplicate elements are removed.
          </>
        ),
        examples: [
          {
            description: 'Example: find difference of two lists',
            items: [
              { type: 'input', contents: '{7, 1, 3, 9, 2} Δ {2, 6, 4, 1, 5}' },
              { type: 'output', contents: '{7, 3, 9, 6, 4, 5}' },
            ],
          },
        ],
        related: ['union', 'intersection', 'difference'],
      },
      {
        name: 'subset',
        symbol: '⊂',
        syntax: 'L₁ ⊂ L₂',
        parameters: [
          {
            name: 'L₁',
            type: ParameterType.List,
          },
          {
            name: 'L₂',
            type: ParameterType.List,
          },
        ],
        description: (
          <>
            Tests whether <code>L₁</code> is a subset of <code>L₂</code>.
          </>
        ),
        examples: [
          {
            description: 'Example: test subset',
            items: [
              { type: 'input', contents: '{1, 9} ⊂ {7, 1, 3, 9, 2}' },
              { type: 'output', contents: 'True' },
              { type: 'input', contents: '{1, 4} ⊂ {7, 1, 3, 9, 2}' },
              { type: 'output', contents: 'False' },
            ],
          },
        ],
        related: ['subset or equal', 'superset', 'superset or equal'],
      },
      {
        name: 'subset or equal',
        symbol: '⊆',
        syntax: 'L₁ ⊆ L₂',
        parameters: [
          {
            name: 'L₁',
            type: ParameterType.List,
          },
          {
            name: 'L₂',
            type: ParameterType.List,
          },
        ],
        description: (
          <>
            Tests whether <code>L₁</code> is a subset of, or equal to, <code>L₂</code>.
          </>
        ),
        examples: [
          {
            description: 'Example: test subset or equal',
            items: [
              { type: 'input', contents: '{1, 2, 3, 7, 9} ⊆ {7, 1, 3, 9, 2}' },
              { type: 'output', contents: 'True' },
              { type: 'input', contents: '{1, 2, 3, 6, 9} ⊆ {7, 1, 3, 9, 2}' },
              { type: 'output', contents: 'False' },
            ],
          },
        ],
        related: ['subset', 'superset', 'superset or equal'],
      },
      {
        name: 'superset',
        symbol: '⊃',
        syntax: 'L₁ ⊃ L₂',
        parameters: [
          {
            name: 'L₁',
            type: ParameterType.List,
          },
          {
            name: 'L₂',
            type: ParameterType.List,
          },
        ],
        description: (
          <>
            Tests whether <code>L₁</code> is a superset of <code>L₂</code>.
          </>
        ),
        examples: [
          {
            description: 'Example: test superset',
            items: [
              { type: 'input', contents: '{1, 2, 3, 7, 9, 10} ⊃ {7, 1, 3, 9, 2}' },
              { type: 'output', contents: 'True' },
              { type: 'input', contents: '{1, 2, 3, 7} ⊃ {7, 1, 3, 9, 2}' },
              { type: 'output', contents: 'False' },
            ],
          },
        ],
        related: ['subset', 'subset or equal', 'superset or equal'],
      },
      {
        name: 'superset or equal',
        symbol: '⊇',
        syntax: 'L₁ ⊇ L₂',
        parameters: [
          {
            name: 'L₁',
            type: ParameterType.List,
          },
          {
            name: 'L₂',
            type: ParameterType.List,
          },
        ],
        description: (
          <>
            Tests whether <code>L₁</code> is a superset of, or equal to, <code>L₂</code>.
          </>
        ),
        examples: [
          {
            description: 'Example: test superset or equal',
            items: [
              { type: 'input', contents: '{1, 2, 3, 7, 9} ⊇ {7, 1, 3, 9, 2}' },
              { type: 'output', contents: 'True' },
              { type: 'input', contents: '{1, 2, 3, 6, 9} ⊇ {7, 1, 3, 9, 2}' },
              { type: 'output', contents: 'False' },
            ],
          },
        ],
        related: ['subset', 'subset or equal', 'superset'],
      },
    ],
  },

  {
    name: 'Matrix functions',
    functions: [
      {
        name: 'transpose',
        symbol: (
          <>
            M<sup>T</sup>
          </>
        ),
        syntax: (
          <>
            M<sup>T</sup>
          </>
        ),
        parameters: [
          {
            name: 'M',
            type: ParameterType.Matrix,
          },
        ],
        description: 'Flips the matrix along the diagonal.',
        examples: [
          {
            description: 'Example: transpose matrix',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>1</div>
                          <div className={styles['matrix-cell']}>2</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>3</div>
                          <div className={styles['matrix-cell']}>4</div>
                        </div>
                      </div>
                    </div>
                    <sup>T</sup>
                  </>
                ),
              },
              {
                type: 'output',
                contents: (
                  <>
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>1</div>
                          <div className={styles['matrix-cell']}>3</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>2</div>
                          <div className={styles['matrix-cell']}>4</div>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
            ],
          },
        ],
      },
      {
        name: 'identity matrix',
        symbol: (
          <>
            I<sub>n</sub>
          </>
        ),
        syntax: (
          <>
            I<sub>n</sub>(n)
          </>
        ),
        parameters: [
          {
            name: 'n',
            type: ParameterType.NaturalNumber,
            description: 'size',
          },
        ],
        description: (
          <>
            Generates an identity matrix of size <code>n</code>×<code>n</code>.
          </>
        ),
        examples: [
          {
            description: (
              <>
                Example: create I<sub>4</sub>
              </>
            ),
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    I<sub>n</sub>(4)
                  </>
                ),
              },
              {
                type: 'output',
                contents: (
                  <>
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>1</div>
                          <div className={styles['matrix-cell']}>0</div>
                          <div className={styles['matrix-cell']}>0</div>
                          <div className={styles['matrix-cell']}>0</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>0</div>
                          <div className={styles['matrix-cell']}>1</div>
                          <div className={styles['matrix-cell']}>0</div>
                          <div className={styles['matrix-cell']}>0</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>0</div>
                          <div className={styles['matrix-cell']}>0</div>
                          <div className={styles['matrix-cell']}>1</div>
                          <div className={styles['matrix-cell']}>0</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>0</div>
                          <div className={styles['matrix-cell']}>0</div>
                          <div className={styles['matrix-cell']}>0</div>
                          <div className={styles['matrix-cell']}>1</div>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
            ],
          },
        ],
      },
      {
        name: 'determinant',
        symbol: 'det',
        syntax: 'det(M)',
        parameters: [
          {
            name: 'M',
            type: ParameterType.SquareMatrix,
          },
        ],
        description: 'Calculates the determinant of a matrix.',
        examples: [
          {
            description: 'Example: get matrix determinant',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    det(
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>4</div>
                          <div className={styles['matrix-cell']}>6</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>-3</div>
                          <div className={styles['matrix-cell']}>8</div>
                        </div>
                      </div>
                    </div>
                    )
                  </>
                ),
              },
              { type: 'output', contents: '50' },
            ],
          },
        ],
      },
      {
        name: 'row',
        syntax: 'row(M, row)',
        parameters: [
          {
            name: 'M',
            type: ParameterType.Matrix,
          },
          {
            name: 'row',
            type: ParameterType.NaturalNumber,
            description: 'row number',
          },
        ],
        description: (
          <>
            Returns the element in the matrix in <code>row</code> as a row vector.
          </>
        ),
        examples: [
          {
            description: 'Example: get matrix row',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    row(
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>1</div>
                          <div className={styles['matrix-cell']}>2</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>3</div>
                          <div className={styles['matrix-cell']}>4</div>
                        </div>
                      </div>
                    </div>
                    , 1)
                  </>
                ),
              },
              {
                type: 'output',
                contents: (
                  <>
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>1</div>
                          <div className={styles['matrix-cell']}>2</div>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
            ],
          },
        ],
        related: ['cell', 'column'],
      },
      {
        name: 'column',
        syntax: 'col(M, n)',
        parameters: [
          {
            name: 'M',
            type: ParameterType.Matrix,
          },
          {
            name: 'row',
            type: ParameterType.NaturalNumber,
            description: 'column number',
          },
        ],
        description: (
          <>
            Returns the element in the matrix in <code>column</code> as a column vector.
          </>
        ),
        examples: [
          {
            description: 'Example: get matrix row',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    col(
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>1</div>
                          <div className={styles['matrix-cell']}>2</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>3</div>
                          <div className={styles['matrix-cell']}>4</div>
                        </div>
                      </div>
                    </div>
                    , 2)
                  </>
                ),
              },
              {
                type: 'output',
                contents: (
                  <>
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>2</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>4</div>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
            ],
          },
        ],
        related: ['cell', 'row'],
      },
      {
        name: 'cell',
        syntax: 'cell(M, row, column)',
        parameters: [
          {
            name: 'M',
            type: ParameterType.Matrix,
          },
          {
            name: 'row',
            type: ParameterType.NaturalNumber,
            description: 'row number',
          },
          {
            name: 'column',
            type: ParameterType.NaturalNumber,
            description: 'column number',
          },
        ],
        description: (
          <>
            Returns the element in the matrix at location <code>row</code>, <code>column</code>.
          </>
        ),
        examples: [
          {
            description: 'Example: get matrix cell value',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    cell(
                    <div className={styles['matrix']}>
                      <div className={styles['matrix-inner']}>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>1</div>
                          <div className={styles['matrix-cell']}>2</div>
                        </div>
                        <div className={styles['matrix-row']}>
                          <div className={styles['matrix-cell']}>3</div>
                          <div className={styles['matrix-cell']}>4</div>
                        </div>
                      </div>
                    </div>
                    , 1, 2)
                  </>
                ),
              },
              { type: 'output', contents: '2' },
            ],
          },
        ],
        related: ['row', 'column'],
      },
    ],
  },

  {
    name: 'Statistical functions',
    functions: [
      {
        name: 'binomial probability density function',
        syntax: ['binom-pdf(trials, p, value)'],
        parameters: [
          {
            name: 'trials',
            type: ParameterType.NaturalNumber,
            description: 'number of trials',
          },
          {
            name: 'p',
            type: ParameterType.PValue,
            description: 'chance of success',
          },
          {
            name: 'value',
            type: ParameterType.NaturalNumber,
            description: 'number of successes',
          },
        ],
        description: (
          <>
            When a certain amount of experiments (<code>trials</code>) are performed, and the chance of success in each
            of these experiments is <code>p</code>, the binomial probability density function calculates the chance that
            exactly <code>value</code> successes are achieved.
          </>
        ),
        examples: [
          {
            description: 'Example: get the probability of getting heads 5 times, when flipping a coin 10 times',
            items: [
              { type: 'input', contents: 'binom-pdf(10, .5, 5)' },
              { type: 'output', contents: '0.24609375' },
            ],
          },
          {
            description: 'Example: get the probability of rolling a 6 once, when rolling a die 5 times',
            items: [
              { type: 'input', contents: 'binom-pdf(5, 1 / 6, 1)' },
              { type: 'output', contents: '0.401877572' },
            ],
          },
        ],
        related: [
          'binomial cumulative distribution function',
          'geometric probability density function',
          'geometric cumulative distribution function',
        ],
      },
      {
        name: 'binomial cumulative distribution function',
        syntax: ['binom-cdf(trials, p, value)'],
        parameters: [
          {
            name: 'trials',
            type: ParameterType.NaturalNumber,
            description: 'number of trials',
          },
          {
            name: 'p',
            type: ParameterType.PValue,
            description: 'chance of success',
          },
          {
            name: 'value',
            type: ParameterType.NaturalNumber,
            description: 'minimum number of successes',
          },
        ],
        description: (
          <>
            When a certain amount of experiments (<code>trials</code>) are performed, and the chance of success in each
            of these experiments is <code>p</code>, the binomial cumulative distribution function calculates the chance
            that at most <code>value</code> successes are achieved.
          </>
        ),
        examples: [
          {
            description: 'Example: get the probability of getting heads 5 times or less, when flipping a coin 10 times',
            items: [
              { type: 'input', contents: 'binom-cdf(10, .5, 5)' },
              { type: 'output', contents: '0.623046875' },
            ],
          },
          {
            description: 'Example: get the probability of rolling a 6 at most once, when rolling a die 5 times',
            items: [
              { type: 'input', contents: 'binom-cdf(5, 1 / 6, 1)' },
              { type: 'output', contents: '0.803755144' },
            ],
          },
        ],
        related: [
          'binomial probability density function',
          'geometric probability density function',
          'geometric cumulative distribution function',
        ],
      },
      {
        name: 'normal probability density function',
        syntax: ['normal-pdf(value)', 'normal-pdf(value, μ)', 'normal-pdf(value, μ, σ)'],
        parameters: [
          {
            name: 'value',
            type: ParameterType.RealNumber,
            description: 'value to test',
          },
          {
            name: 'μ',
            type: ParameterType.RealNumber,
            description: 'distribution mean',
          },
          {
            name: 'σ',
            type: ParameterType.RealNumber,
            description: 'standard deviation of distribution',
          },
        ],
        description: (
          <>
            Since the normal distribution is continuous, normal-pdf is useful mostly to draw the normal distribution
            curve. The <code>μ</code> and <code>σ</code> variables are optional, and will default to 0 and 1,
            respectively.
          </>
        ),
        related: ['normal cumulative distribution function'],
      },
      {
        name: 'normal cumulative distribution function',
        syntax: ['normal-pdf(lower, upper)', 'normal-pdf(lower, upper, μ)', 'normal-pdf(lower, upper, μ, σ)'],
        parameters: [
          {
            name: 'lower',
            type: ParameterType.RealNumber,
            description: 'lower bound to test',
          },
          {
            name: 'upper',
            type: ParameterType.RealNumber,
            description: 'upper bound to test',
          },
          {
            name: 'μ',
            type: ParameterType.RealNumber,
            description: 'distribution mean',
          },
          {
            name: 'σ',
            type: ParameterType.RealNumber,
            description: 'standard deviation of distribution',
          },
        ],
        description: (
          <>
            When a variable is normally distributed, the normal cumulative distribution function will help find the
            probability that the variable falls between <code>lower</code> and <code>upper</code>. The <code>μ</code>{' '}
            and <code>σ</code> variables are optional, and will default to 0 and 1, respectively.
            <br />
            <br />
            Often times, one wants to find the chance that the variable is higher or lower than a certain threshold. A
            way to do this is depicted in the second and third example below.
          </>
        ),
        examples: [
          {
            description:
              'Example: get the probability that a variable following the standard normal distribution is between -1 and 1.',
            items: [
              { type: 'input', contents: 'normal-cdf(-1, 1)' },
              { type: 'output', contents: '0.682689492' },
            ],
          },
          {
            description:
              'Example: get the probability that a person is larger than 180cm given that the length in a certain region follows a normal distribution with μ 171cm and σ 9cm.',
            items: [
              { type: 'input', contents: 'normal-cdf(180, 10E99, 171, 9)' },
              { type: 'output', contents: '0.158655254' },
            ],
          },
          {
            description:
              'Example: get the probability that a person is smaller than 175cm given that the length in a certain region follows a normal distribution with μ 171cm and σ 9cm.',
            items: [
              { type: 'input', contents: 'normal-cdf(-10E99, 175, 171, 9)' },
              { type: 'output', contents: '0.671639357' },
            ],
          },
        ],
        related: ['normal probability density function'],
      },
      {
        name: 't probability density function',
        syntax: 't-pdf(df, value)',
        parameters: [
          {
            name: 'df',
            type: ParameterType.NaturalNumber,
            description: 'degrees of freedom',
          },
          {
            name: 'value',
            type: ParameterType.RealNumber,
            description: 'value to test',
          },
        ],
        description: 'Since the t distribution is continuous, t-pdf is useful mostly to draw the t distribution curve.',
        related: ['t cumulative distribution function'],
      },
      {
        name: 't cumulative distribution function',
        syntax: 't-pdf(df, lower, upper)',
        parameters: [
          {
            name: 'df',
            type: ParameterType.NaturalNumber,
            description: 'degrees of freedom',
          },
          {
            name: 'lower',
            type: ParameterType.RealNumber,
            description: 'lower bound to test',
          },
          {
            name: 'upper',
            type: ParameterType.RealNumber,
            description: 'upper bound to test',
          },
        ],
        description: (
          <>
            When a variable is t distributed, the t cumulative distribution function will help find the probability that
            the variable falls between <code>lower</code> and <code>upper</code>.
            <br />
            <br />
            Often times, one wants to find the chance that the variable is higher or lower than a certain threshold. A
            way to do this is depicted in the second and third example below.
          </>
        ),
        examples: [
          {
            description:
              'Example: get the probability that a variable following the t distribution with 20 degrees of freedom is between -1 and 1.',
            items: [
              { type: 'input', contents: 't-cdf(20, -1, 1)' },
              { type: 'output', contents: '0.670743423' },
            ],
          },
          {
            description:
              'Example: get the probability that a person is larger than 180cm given that the length in a group of 30 people follows a t distribution with μ 171cm and σ 9cm.',
            items: [
              { type: 'input', contents: 't-cdf(29, (180 - 171) / 9, 10E99)' },
              { type: 'output', contents: '0.162790994' },
            ],
          },
          {
            description:
              'Example: get the probability that a person is smaller than 175cm given that the length in a group of 30 people follows a t distribution with μ 171cm and σ 9cm.',
            items: [
              { type: 'input', contents: 't-cdf(29, -10E99, (175 - 171) / 9)' },
              { type: 'output', contents: '0.669989747' },
            ],
          },
        ],
        related: ['t probability density function'],
      },
      {
        name: 'χ² probability density function',
        syntax: <>χ²-pdf(df, value)</>,
        parameters: [
          {
            name: 'df',
            type: ParameterType.NaturalNumber,
            description: 'degrees of freedom',
          },
          {
            name: 'value',
            type: ParameterType.RealNumber,
            description: 'value to test',
          },
        ],
        description:
          'Since the χ²-distribution is continuous, χ²-pdf is useful mostly to draw the χ ² distribution curve.',
        related: ['χ² cumulative distribution function'],
      },
      {
        name: 'χ² cumulative distribution function',
        syntax: <>χ²-cdf(df, lower, upper)</>,
        parameters: [
          {
            name: 'df',
            type: ParameterType.NaturalNumber,
            description: 'degrees of freedom',
          },
          {
            name: 'lower',
            type: ParameterType.RealNumber,
            description: 'lower bound to test',
          },
          {
            name: 'upper',
            type: ParameterType.RealNumber,
            description: 'upper bound to test',
          },
        ],
        description: (
          <>
            When a variable is χ² distributed, the χ² cumulative distribution function will help find the probability
            that the variable falls between <code>lower</code> and <code>upper</code>.
          </>
        ),
        examples: [
          {
            description:
              'Example: a population of 100 penguins is expected to have a 1:1 male-female ratio. In reality, 42 males and 58 females are found. What is the chance that these numbers are the result of mere coincidence?',
            items: [
              { type: 'input', contents: '(42 - 50)² / 50 + (58 - 50)² / 50 → x' },
              { type: 'output', contents: '2.56' },
              { type: 'input', contents: 'χ²-cdf(1, x, 10E99)' },
              { type: 'output', contents: '0.109598583' },
            ],
          },
        ],
        related: ['χ² probability density function'],
      },
      {
        name: 'F probability density function',
        syntax: 'F-pdf(df₁, df₂, value)',
        parameters: [
          {
            name: 'df₁',
            type: ParameterType.NaturalNumber,
            description: 'degrees of freedom numerator',
          },
          {
            name: 'df₂',
            type: ParameterType.NaturalNumber,
            description: 'degrees of freedom denominator',
          },
          {
            name: 'value',
            type: ParameterType.RealNumber,
            description: 'value to test',
          },
        ],
        description: 'Since the F distribution is continuous, F-pdf is useful mostly to draw the F distribution curve.',
        related: ['F cumulative distribution function'],
      },
      {
        name: 'F cumulative distribution function',
        syntax: 'F-cdf(df₁, df₂, lower, upper)',
        parameters: [
          { name: 'df₁', type: ParameterType.NaturalNumber, description: 'degrees of freedom numerator' },
          { name: 'df₂', type: ParameterType.NaturalNumber, description: 'degrees of freedom denominator' },
          { name: 'lower', type: ParameterType.RealNumber, description: 'lower bound to test' },
          { name: 'upper', type: ParameterType.RealNumber, description: 'upper bound to test' },
        ],
        description: (
          <>
            When a variable is F distributed, the F cumulative distribution function will help find the probability that
            the variable falls between <code>lower</code> and <code>upper</code>.
          </>
        ),
        examples: [
          {
            description:
              'Example: three types of fertilizer are tested on crops six times each. The yields of the harvest are stored in lists x, y and z. What is the chance that the difference in yields between the types of fertilizer is the result of mere coincidence?',
            items: [
              { type: 'input', contents: '{6, 8, 4, 5, 3, 4} → x' },
              { type: 'output', contents: '{6, 8, 4, 5, 3, 4}' },
              { type: 'input', contents: '{8, 12, 9, 11, 6, 8} → y' },
              { type: 'output', contents: '{8, 12, 9, 11, 6, 8}' },
              { type: 'input', contents: '{13, 9, 11, 8, 7, 12} → z' },
              { type: 'output', contents: '{13, 9, 11, 8, 7, 12}' },
              { type: 'input', contents: 'length(x) → n' },
              { type: 'output', contents: '6' },
              { type: 'input', contents: '3 → a' },
              { type: 'output', contents: '3' },
              { type: 'input', contents: '{μ(x), μ(y), μ(z)} → m' },
              { type: 'output', contents: '{5, 9, 10}' },
              { type: 'input', contents: 'σ(n(m - μ(m))²) / (a - 1) → s' },
              { type: 'output', contents: '42' },
              { type: 'input', contents: 'σ((x - μ(x))²) + σ((y - μ(y))²) + σ((z - μ(z))²) / (a(n - 1))' },
              { type: 'output', contents: '68' },
              { type: 'input', contents: 'Ans / (a(n - 1)) → b' },
              { type: 'output', contents: '4.533333333' },
              { type: 'input', contents: 's / b → f' },
              { type: 'output', contents: '9.264705882' },
              { type: 'input', contents: 'F-cdf(a - 1, a(n - 1), f, 10E99)' },
              { type: 'output', contents: '2.398777329E-3' },
            ],
          },
        ],
        related: ['F probability density function'],
      },
      {
        name: 'poisson probability density function',
        syntax: 'poisson-pdf(mean, value)',
        parameters: [
          { name: 'mean', type: ParameterType.NaturalNumber, description: 'distribution mean' },
          { name: 'value', type: ParameterType.NaturalNumber, description: 'value to test' },
        ],
        description: (
          <>
            When in a poisson process a certain event happens on average <code>mean</code> times in a certain time span,
            poisson-pdf calculates the probability that, for a particular equal time span, this event occurs{' '}
            <code>value</code> times.
          </>
        ),
        examples: [
          {
            description:
              'Example: get the probability that a person, who receives on average 4 pieces of mail a day, receives precisely 2 pieces on mail on a specific day.',
            items: [
              { type: 'input', contents: 'poisson-pdf(4, 2)' },
              { type: 'output', contents: '0.146525111' },
            ],
          },
        ],
        related: ['poisson cumulative distribution function'],
      },
      {
        name: 'poisson cumulative distribution function',
        syntax: 'poisson-cdf(mean, value)',
        parameters: [
          { name: 'mean', type: ParameterType.NaturalNumber, description: 'distribution mean' },
          { name: 'value', type: ParameterType.NaturalNumber, description: 'maximum value to test' },
        ],
        description: (
          <>
            When in a poisson process a certain event happens on average <code>mean</code> times in a certain time span,
            poisson-pdf calculates the probability that, for a particular equal time span, this event occurs a maximum
            of <code>value</code> times.
          </>
        ),
        examples: [
          {
            description:
              'Example: get the probability that a person, who receives on average 4 pieces of mail a day, receives a maximum 2 pieces on mail on a specific day.',
            items: [
              { type: 'input', contents: 'poisson-cdf(4, 2)' },
              { type: 'output', contents: '0.238103306' },
            ],
          },
        ],
        related: ['poisson probability density function'],
      },
      {
        name: 'geometric probability density function',
        syntax: 'geometric-pdf(P, trials)',
        parameters: [
          { name: 'P', type: ParameterType.PValue, description: 'chance of success' },
          { name: 'trials', type: ParameterType.NaturalNumber, description: 'number of trials' },
        ],
        description: (
          <>
            Given that a certain event succeeds with probability <code>P</code>, and the event will keep happening until
            a success occurs, geometric probability density function will return the probability that the event succeeds
            after exactly some number of <code>trials</code>.
          </>
        ),
        examples: [
          {
            description:
              'Example: you throw a die until you roll a 6. What is the chance that this takes you precisely three throws?',
            items: [
              { type: 'input', contents: 'geometric-pdf(1 / 6, 3)' },
              { type: 'output', contents: '0.115740741' },
            ],
          },
        ],
        related: [
          'geometric cumulative distribution function',
          'binomial probability density function',
          'binomial cumulative distribution function',
        ],
      },
      {
        name: 'geometric cumulative distribution function',
        syntax: 'geometric-cdf(P, trials)',
        parameters: [
          { name: 'P', type: ParameterType.PValue, description: 'chance of success' },
          { name: 'trials', type: ParameterType.NaturalNumber, description: 'maximum number of trials' },
        ],
        description: (
          <>
            Given that a certain event succeeds with probability <code>P</code>, and the event will keep happening until
            a success occurs, geometric probability density function will return the probability that the event succeeds
            after at most some number of <code>trials</code>.
          </>
        ),
        examples: [
          {
            description:
              'Example: you throw a die until you roll a 6. What is the chance that this takes you at most three throws?',
            items: [
              { type: 'input', contents: 'geometric-cdf(1 / 6, 3)' },
              { type: 'output', contents: '0.421296296' },
            ],
          },
        ],
        related: [
          'geometric probability density function',
          'binomial probability density function',
          'binomial cumulative distribution function',
        ],
      },
      {
        name: 'combinations',
        symbol: 'nCr',
        syntax: 'a nCr b',
        parameters: [
          { name: 'a', type: ParameterType.NaturalNumber, description: 'total' },
          { name: 'b', type: ParameterType.NaturalNumber, description: 'sample' },
        ],
        description:
          'The nCr operation calculates the number of possible combinations of sample units can be taken from a population of total items. The difference between combinations and permutations is that for combinations, the order in which items are picked is irrelevant.',
        examples: [
          {
            description:
              'Example: what is the number of possible combinations of books I can take on vacation if I randomly pick 3 out of my collection of 50 books?',
            items: [
              { type: 'input', contents: '50 nCr 3' },
              { type: 'output', contents: '19600' },
            ],
          },
        ],
        related: ['permutations', 'factorial'],
      },
      {
        name: 'permutations',
        symbol: 'nPr',
        syntax: 'a nPr b',
        parameters: [
          { name: 'a', type: ParameterType.NaturalNumber, description: 'total' },
          { name: 'b', type: ParameterType.NaturalNumber, description: 'sample' },
        ],
        description:
          'The nPr operation calculates the number of possible permutations of sample units can be taken from a population of total items. The difference between combinations and permutations is that for permutations, the order in which items are picked is significant.',
        examples: [
          {
            description:
              'Example: in an 8-person race, how many possible combinations of gold-silver-bronze medallists are there?',
            items: [
              { type: 'input', contents: '8 nPr 3' },
              { type: 'output', contents: '336' },
            ],
          },
        ],
        related: ['combinations', 'factorial'],
      },
      {
        name: 'inverse-normal',
        syntax: ['inverse-normal(P)', 'inverse-normal(P, μ)', 'inverse-normal(P, μ, σ)'],
        parameters: [
          { name: 'P', type: ParameterType.PValue, description: 'p-value to test' },
          { name: 'μ', type: ParameterType.RealNumber, description: 'distribution mean' },
          { name: 'σ', type: ParameterType.RealNumber, description: 'standard deviation of distribution' },
        ],
        description: (
          <>
            When a variable is normally distributed, the inverse-normal function will, given a probability{' '}
            <code>P</code>, help find the value with this tail-probability. The <code>μ</code> and <code>σ</code>{' '}
            variables are optional, and will default to 0 and 1, respectively.
          </>
        ),
        examples: [
          {
            description:
              'Example: Example: get the minimum length of the 5% tallest people, given that the length in a certain region follows a normal distribution with μ 171cm and σ 9cm.',
            items: [
              { type: 'input', contents: 'inverse-normal(.95, 171, 9)' },
              { type: 'output', contents: '185.8036826' },
            ],
          },
        ],
      },
      {
        name: 'inverse-t',
        syntax: 'inverse-t(df, P)',
        parameters: [
          { name: 'df', type: ParameterType.NaturalNumber, description: 'degrees of freedom' },
          { name: 'P', type: ParameterType.PValue, description: 'p-value to test' },
        ],
        description: (
          <>
            When a variable is normally distributed, the inverse-normal function will, given a probability{' '}
            <code>P</code>, help find the value with this tail-probability.
          </>
        ),
        examples: [
          {
            description:
              'Example: Example: get the minimum length of the 5% tallest people, given that the length in a group of 30 people follows a t distribution with μ 171cm and σ 9cm.',
            items: [
              { type: 'input', contents: 'inverse-t(29, .95) × 9 + 171' },
              { type: 'output', contents: '186.2921432' },
            ],
          },
        ],
      },
    ],
  },

  {
    name: 'Miscellaneous functions',
    functions: [
      {
        name: 'factorial',
        symbol: '!',
        syntax: 'a!',
        parameters: [
          {
            name: 'a',
            type: ParameterType.NaturalNumber,
          },
        ],
        description: (
          <>
            Calculates the factorial for <code>a</code>, which is equal to 0 × 1 × 2 × ... × (<code>a</code> - 1) ×{' '}
            <code>a</code>.
          </>
        ),
        examples: [
          {
            description: 'Example: calculate the factorial of 8',
            items: [
              { type: 'input', contents: '8!' },
              { type: 'output', contents: '40320' },
              { type: 'input', contents: '1 × 2 × 3 × 4 × 5 × 6 × 7 × 8' },
              { type: 'output', contents: '40320' },
            ],
          },
        ],
        related: ['combinations', 'permutations', 'gamma'],
      },
      {
        name: 'gamma',
        symbol: 'Γ',
        syntax: 'Γ(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
            description: 'non-zero and not a negative integer',
          },
        ],
        description:
          'The gamma function is a generalization of the factorial function for real and complex numbers. It is shifted left on the x axis by one, so that 1! equals Γ(2).',
        examples: [
          {
            description: 'Example: calculate the gamma function for a complex value',
            items: [
              { type: 'input', contents: 'Γ(-1 + 2i)' },
              { type: 'output', contents: '-0.03236129 + 0.011229484i' },
            ],
          },
        ],
        related: ['factorial'],
      },
      {
        name: 'absolute',
        symbol: '|c|',
        syntax: 'abs(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description: 'Returns the absolute value of a number.',
        examples: [
          {
            description: 'Example: calculate the absolute value of a real number',
            items: [
              { type: 'input', contents: 'abs(-2,5)' },
              { type: 'output', contents: '2.5' },
            ],
          },
          {
            description: 'Example: calculate the absolute value of a complex number',
            items: [
              { type: 'input', contents: 'abs(-3 + 4i)' },
              { type: 'output', contents: '5' },
            ],
          },
        ],
      },
      {
        name: 'round down',
        symbol: '⌊c⌋',
        syntax: 'floor(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description: 'Rounds the value down. Both the real and imaginary part of the value are rounded.',
        examples: [
          {
            description: 'Example: rounding down a positive value',
            items: [
              { type: 'input', contents: 'floor(1.8)' },
              { type: 'output', contents: '1' },
            ],
          },
          {
            description: 'Example: rounding down a negative value',
            items: [
              { type: 'input', contents: 'floor(-1.8)' },
              { type: 'output', contents: '-2' },
            ],
          },
        ],
        related: ['round', 'round up'],
      },
      {
        name: 'round',
        symbol: '⌊c⌉',
        syntax: 'round(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description:
          "Rounds the value, with 'round half up' as a tie-breaking rule. Both the real and imaginary part of the value are rounded.",
        examples: [
          {
            description: 'Example: rounding a positive value',
            items: [
              { type: 'input', contents: 'round(1.5)' },
              { type: 'output', contents: '2' },
            ],
          },
          {
            description: 'Example: rounding a negative value',
            items: [
              { type: 'input', contents: 'round(-1.5)' },
              { type: 'output', contents: '-1' },
            ],
          },
        ],
        related: ['round down', 'round up'],
      },
      {
        name: 'round up',
        symbol: '⌈z⌉',
        syntax: 'ceil(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description: 'Rounds the value up. Both the real and imaginary part of the value are rounded.',
        examples: [
          {
            description: 'Example: rounding up a positive value',
            items: [
              { type: 'input', contents: 'ceil(1.8)' },
              { type: 'output', contents: '2' },
            ],
          },
          {
            description: 'Example: rounding up a negative value',
            items: [
              { type: 'input', contents: 'ceil(-1.8)' },
              { type: 'output', contents: '-1' },
            ],
          },
        ],
        related: ['round down', 'round'],
      },
      {
        name: 'conjugate',
        symbol: (
          <>
            c<sup>*</sup>
          </>
        ),
        syntax: 'conj(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description: 'The conjugate negates the imaginary part of a complex number.',
        examples: [
          {
            description: 'Example: get the conjugate of a complex number',
            items: [
              { type: 'input', contents: 'conj(2 + 3i)' },
              { type: 'input', contents: '2 - 3i' },
            ],
          },
        ],
      },
      {
        name: 'real part',
        symbol: 'ℜ',
        syntax: 'ℜ(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description: 'Returns only the real part of a complex number.',
        examples: [
          {
            description: 'Example: get the real part of a complex number',
            items: [
              { type: 'input', contents: 'ℜ(2 + 3i)' },
              { type: 'output', contents: '2' },
            ],
          },
        ],
        related: ['imaginary part'],
      },
      {
        name: 'imaginary part',
        symbol: 'ℑ',
        syntax: 'ℑ(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description: 'Returns only the imaginary part of a complex number.',
        examples: [
          {
            description: 'Example: get the imaginary part of a complex number',
            items: [
              { type: 'input', contents: 'ℑ(2 + 3i)' },
              { type: 'output', contents: '3i' },
            ],
          },
        ],
        related: ['real part'],
      },
      {
        name: 'integer part',
        syntax: 'int(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description: 'Returns only the integer part of a number.',
        examples: [
          {
            description: 'Example: get the integer part of a complex number',
            items: [
              { type: 'input', contents: 'int(5.6 - 6.3i)' },
              { type: 'output', contents: '5 - 6i' },
            ],
          },
        ],
        related: ['fraction part'],
      },
      {
        name: 'fraction part',
        syntax: 'frac(value)',
        parameters: [
          {
            name: 'value',
            type: ParameterType.ComplexNumber,
          },
        ],
        description: 'Returns only the fraction part of a number.',
        examples: [
          {
            description: 'Example: get the fraction part of a complex number',
            items: [
              { type: 'input', contents: 'int(5.6 - 6.3i)' },
              { type: 'output', contents: '0.6 - 0.3i' },
            ],
          },
        ],
        related: ['integer part'],
      },
      {
        name: 'greatest common denominator',
        syntax: 'gcd(a, b)',
        parameters: [
          { name: 'a', type: ParameterType.Integer },
          { name: 'b', type: ParameterType.Integer },
        ],
        description: 'Finds the greatest common denominator for two integers. Result is a positive integer.',
        examples: [
          {
            description: 'Example: get the greatest common denominator for two integers',
            items: [
              { type: 'input', contents: 'gcd(98, 182)' },
              { type: 'output', contents: '14' },
            ],
          },
        ],
        related: ['least common multiple'],
      },
      {
        name: 'least common multiple',
        syntax: 'lcm(a, a)',
        parameters: [
          { name: 'a', type: ParameterType.Integer },
          { name: 'b', type: ParameterType.Integer },
        ],
        description: 'Finds the least common multiple of two integers. Result is a positive integer.',
        examples: [
          {
            description: 'Example: get the least common multiple for two integers',
            items: [
              { type: 'input', contents: 'gcd(9, 15)' },
              { type: 'output', contents: '45' },
            ],
          },
        ],
        related: ['greatest common denominator'],
      },
      {
        name: 'random',
        syntax: ['rand()', 'rand(min, max)'],
        description: (
          <>
            Returns a random number between <code>min</code>, inclusive and <code>max</code>, exclusive.{' '}
            <code>Min</code> and <code>max</code> default to 0 and 1, respectively.
          </>
        ),
        parameters: [
          { name: 'min', type: ParameterType.RealNumber },
          { name: 'max', type: ParameterType.RealNumber },
        ],
      },
      {
        name: 'store',
        symbol: '→',
        syntax: 'value → variable',
        parameters: [
          { name: 'value', type: ParameterType.Any },
          { name: 'variable', type: ParameterType.Variable },
        ],
        description: 'Stores a value in a variable.',
        examples: [
          {
            description: 'Example: store the number 58 in variable a',
            items: [
              {
                type: 'input',
                contents: (
                  <>
                    58 → <strong>a</strong>
                  </>
                ),
              },
              { type: 'output', contents: '58' },
              {
                type: 'input',
                contents: (
                  <>
                    <strong>a</strong>
                  </>
                ),
              },
              { type: 'output', contents: '58' },
            ],
          },
        ],
      },
    ],
  },
];
