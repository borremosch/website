import { Link, List, ListItem, ListSubheader, Paper, Typography } from '@material-ui/core';
import screenOverviewImage from '../../Images/screen-overview.png';
import styles from './Manual.module.css';
import mathsappStyles from '../MathsApp.module.css';

export function Manual() {
  return (
    <>
      <Typography variant="h1">Manual</Typography>
      <Paper variant="outlined" className={styles['table-of-contents']}>
        <List disablePadding={true}>
          <ListSubheader>Table of contents</ListSubheader>
          <ListItem button={true}>
            <Link href="#screenoverview">Screen overview</Link>
          </ListItem>
          <ListItem button={true}>
            <Link href="#basicoperation">Basic operation</Link>
          </ListItem>
          <List disablePadding={true}>
            <ListItem button={true} className={styles['nested-listitem']}>
              <Link href="#basicinput">Basic input</Link>
            </ListItem>
            <ListItem button={true} className={styles['nested-listitem']}>
              <Link href="#secondaryandalphafunctions">Secondary and alpha functions</Link>
            </ListItem>
            <ListItem button={true} className={styles['nested-listitem']}>
              <Link href="#arithmetic">Arithmetic</Link>
            </ListItem>
            <ListItem button={true} className={styles['nested-listitem']}>
              <Link href="#complexnumbers">Complex numbers</Link>
            </ListItem>
          </List>
          <ListItem button={true}>
            <Link href="#reusingpreviousanswers">Reusing previous answers</Link>
          </ListItem>
          <List disablePadding={true}>
            <ListItem button={true} className={styles['nested-listitem']}>
              <Link href="#variables">Variables</Link>
            </ListItem>
          </List>
          <ListItem button={true}>
            <Link href="#binaryoctalandhexadecimalnumbers">Binary, octal and hexadecimal numbers</Link>
          </ListItem>
          <List disablePadding={true}>
            <ListItem button={true} className={styles['nested-listitem']}>
              <Link href="#input">Input</Link>
            </ListItem>
            <ListItem button={true} className={styles['nested-listitem']}>
              <Link href="#output">Output</Link>
            </ListItem>
          </List>
          <ListItem button={true}>
            <Link href="#lists">Lists</Link>
          </ListItem>
          <List disablePadding={true}>
            <ListItem button={true} className={styles['nested-listitem']}>
              <Link href="#overloading">Overloading</Link>
            </ListItem>
          </List>
          <ListItem button={true}>
            <Link href="#precedencerules">Precedence rules</Link>
          </ListItem>
        </List>
      </Paper>
      <Typography variant="h2" id="screenoverview">
        Screen overview
      </Typography>
      <div className={styles['screen-overview-container']}>
        <div className={styles['screen-overview-dummy']}></div>
        <div className={styles['screen-overview']}>
          <img src={screenOverviewImage} alt="screen overview" />
          <div className={styles['legend']} style={{ left: '6.6%', top: '5.5%', height: '24.5%' }}>
            <Link href="#screenoverview_mode_dropdown" className={styles['legend-label']}>
              Mode dropdown
            </Link>
          </div>
          <div className={styles['legend']} style={{ left: '27%', top: '7%', height: '18.5%' }}>
            <Link href="#screenoverview_help" className={styles['legend-label']}>
              Help
            </Link>
          </div>
          <div className={styles['legend']} style={{ left: '72.2%', top: '5.5%', height: '15.5%' }}>
            <Link href="#screenoverview_function_dropdown" className={styles['legend-label']}>
              Function dropdown
            </Link>
          </div>
          <div className={styles['legend']} style={{ left: '84.4%', top: '5.5%', height: '11%' }}>
            <Link href="#screenoverview_output_dropdown" className={styles['legend-label']}>
              Output dropdown
            </Link>
          </div>
          <div className={styles['legend']} style={{ left: '94.7%', top: '5.5%', height: '6.5%' }}>
            <div className={styles['legend-label']}>
              <Link href="#screenoverview_physical_constants">Physical constants</Link>
              <br />
              <Link href="#screenoverview_variable_manager">Variable manager</Link>
              <br />
              <Link href="#screenoverview_settings">Settings</Link>
            </div>
          </div>

          <div className={styles['legend']} style={{ left: '50%', top: '36%' }}>
            <Link href="#screenoverview_output_area" className={styles['legend-label']}>
              Output area
            </Link>
          </div>

          <div
            className={`${styles['legend']} ${styles['legend-top']}`}
            style={{ left: '8.2%', top: '42.25%', height: '11.5%' }}
          >
            <Link href="#screenoverview_2nd_key" className={styles['legend-label']}>
              2nd key
            </Link>
          </div>
          <div
            className={`${styles['legend']} ${styles['legend-top']}`}
            style={{ left: '24.7%', top: '46.75%', height: '7%' }}
          >
            <Link href="#screenoverview_alpha_key" className={styles['legend-label']}>
              Alpha key
            </Link>
          </div>
          <div
            className={`${styles['legend']} ${styles['legend-top']}`}
            style={{ left: '50%', top: '51.25%', height: '2.5%' }}
          >
            <Link href="#screenoverview_navigation_keys" className={styles['legend-label']}>
              Navigation keys
            </Link>
          </div>

          <div className={`${styles['legend']} ${styles['legend-horizontal']}`} style={{ left: '59%', top: '64.5%' }}>
            <Link href="#screenoverview_function_keys" className={styles['legend-label']}>
              Function keys
            </Link>
          </div>
          <div
            className={`${styles['legend']} ${styles['legend-horizontal']} ${styles['legend-black']}`}
            style={{ left: '34%', top: '77%' }}
          >
            <Link href="#screenoverview_numeric_keys" className={styles['legend-label']}>
              Numeric keys
            </Link>
          </div>
          <div
            className={`${styles['legend']} ${styles['legend-horizontal']} ${styles['legend-black']}`}
            style={{ left: '79.9%', top: '84.5%' }}
          >
            <Link href="#screenoverview_basic_operations" className={styles['legend-label']}>
              Basic operations
            </Link>
          </div>
          <div
            className={`${styles['legend']} ${styles['legend-horizontal']} ${styles['legend-black']}`}
            style={{ left: '94%', top: '97.5%' }}
          >
            <div>
              <span className={styles['legend-label']}>
                <Link href="#screenoverview_enter_key">Enter key</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Typography variant="h3" id="screenoverview_mode_dropdown">
        Navigation drawer
      </Typography>
      <Typography variant="body1" paragraph={true}>
        From the navigation drawer, another calculator mode can be selected, changing the main functionality of the
        calculator. The following modes are available:
      </Typography>
      <List>
        <li>
          <strong>Basic</strong> – a slimmed down version of the scientific calculator
        </li>
        <li>
          <strong>Scientific</strong> – the default scientific calculator
        </li>
        <li>
          <strong>Graphing</strong> – allows for formulas to be entered as functions, then plot them{' '}
          <span className={styles['paid_version']}>(paid version only)</span>
        </li>
        <li>
          <strong>Programming</strong> – switches to programming mode, providing bitwise operators on integers{' '}
          <span className={styles['paid_version']}>(paid version only)</span>
        </li>
      </List>
      <Typography variant="h3" id="screenoverview_help">
        Help
      </Typography>
      <Typography variant="body1" paragraph={true}>
        Opens the user manual, which you are currently reading.
      </Typography>
      <Typography variant="h3" id="screenoverview_physical_constants">
        Physical constants
      </Typography>
      <Typography variant="body1" paragraph={true}>
        Opens the physical constants dialog screen. This screen contains a number of often-used physical constants,
        which can be inserted into the current calculation.
      </Typography>
      <Typography variant="h3" id="screenoverview_variable_manager">
        Variable manager
      </Typography>
      <Typography variant="body1" paragraph={true}>
        Opens the variable manager, which shows the current value of all variables, and allows for them to be inserted
        into the current calculation.
      </Typography>
      <Typography variant="h3" id="screenoverview_settings">
        Settings
      </Typography>
      <Typography variant="body1" paragraph={true}>
        Opens the settings screen.
      </Typography>
      <Typography variant="h3" id="screenoverview_function_dropdown">
        Function dialog
      </Typography>
      <Typography variant="body1" paragraph={true}>
        The function dialog contains all extra calculator operators that are not accessible directly from the on-screen
        keyboard. These functions are divided into six categories:
      </Typography>
      <ol>
        <li>
          <strong>Hyperbolic functions</strong>
        </li>
        <li>
          <strong>
            <Link href="/MathsApp/FunctionReference/#miscellaneousfunctions">Math functions</Link>
          </strong>{' '}
          – miscellaneous general functions
        </li>
        <li>
          <strong>
            <Link href="/MathsApp/FunctionReference/#listfunctions">List functions</Link>
          </strong>{' '}
          – functions that apply to lists only (e.g. <Link href="/MathsApp/FunctionReference/#union">union</Link>,{' '}
          <Link href="/MathsApp/FunctionReference/#mean">mean</Link>,{' '}
          <Link href="/MathsApp/FunctionReference/#sum">sum</Link>)
        </li>
        <li>
          <strong>
            <Link href="/MathsApp/FunctionReference/#statisticalfunctions">Statistical functions</Link>
          </strong>{' '}
          – various functions concerning statistical distributions
        </li>
        <li>
          <strong>
            <Link href="/MathsApp/FunctionReference/#matrixfunctions">Matrix functions</Link>
          </strong>{' '}
          – functions that apply to matrices only (e.g.{' '}
          <Link href="/MathsApp/FunctionReference/#transpose">transpose</Link>,{' '}
          <Link href="/MathsApp/FunctionReference/#determinant">determinant</Link>){' '}
          <span className={styles['paid_version']}>(paid version only)</span>
        </li>
        <li>
          <strong>User defined functions</strong> – functions that are customizable{' '}
          <span className={styles['paid_version']}>(paid version only)</span>
        </li>
      </ol>
      <Typography variant="h3" id="screenoverview_output_dropdown">
        Output dropdown
      </Typography>
      <Typography variant="body1" paragraph={true}>
        The output dropdown contains functions to save, load or erase the current output.
      </Typography>
      <Typography variant="h3" id="screenoverview_output_area">
        Output area
      </Typography>
      <Typography variant="body1" paragraph={true}>
        This area will contain all previously entered input and results
      </Typography>
      <Typography variant="h3" id="screenoverview_2nd_key">
        2nd key
      </Typography>
      <Typography variant="body1" paragraph={true}>
        This button switches all keys on the keyboard to their secondary function (shown in the top left of the button).
      </Typography>
      <Typography variant="h3" id="screenoverview_alpha_key">
        Alpha key
      </Typography>
      <Typography variant="body1" paragraph={true}>
        This button switches all keys on the keyboard to their alpha value (shown in the top right of the button). The
        alpha values (a-z) are the variables that one may store values in.
      </Typography>
      <Typography variant="h3" id="screenoverview_navigation_keys">
        Navigation keys
      </Typography>
      <Typography variant="body1" paragraph={true}>
        These buttons may be used to move the cursor in the input.
      </Typography>
      <Typography variant="h3" id="screenoverview_function_keys">
        Function keys
      </Typography>
      <Typography variant="body1" paragraph={true}>
        These buttons contain the most used functions in MathsApp.
      </Typography>
      <Typography variant="h3" id="screenoverview_numeric_keys">
        Numeric keys
      </Typography>
      <Typography variant="body1" paragraph={true}>
        These buttons are used to add numeric data to the input. Besides regular decimal numbers, they also allow
        insertion of binary, octal, and hexadecimal numbers, complex numbers, and the common constants <em>e</em> and{' '}
        <em>π</em>.
      </Typography>
      <Typography variant="h3" id="screenoverview_basic_operations">
        Basic operations
      </Typography>
      <Typography variant="body1" paragraph={true}>
        These buttons contain the most basic arithmetic operators.
      </Typography>
      <Typography variant="h3" id="screenoverview_enter_key">
        Enter key
      </Typography>
      <Typography variant="body1" paragraph={true}>
        This button evaluates the input, and outputs the result.
      </Typography>
      <Typography variant="h2" id="basicoperation">
        Basic operation
      </Typography>
      <Typography variant="h3" id="basicinput">
        Basic input
      </Typography>
      <Typography variant="body1" paragraph={true}>
        Numbers in MathsApp may be entered by using the{' '}
        <span className={`${styles['button']} ${styles['button-numeric']}`}>
          0<span className={styles['shift']}>bin</span>
        </span>{' '}
        through{' '}
        <span className={`${styles['button']} ${styles['button-numeric']}`}>
          9<span className={styles['alpha']}>o</span>
        </span>{' '}
        buttons, and the decimal point{' '}
        <span className={`${styles['button']} ${styles['button-numeric']}`}>
          .<span className={styles['shift']}>oct</span>
        </span>
        . To delete the last entered number, press the{' '}
        <span className={`${styles['button']} ${styles['button-function']}`}>
          &larr;Del<span className={styles['alpha']}>l</span>
        </span>{' '}
        button. To delete all entered input, press <span className="button_clear">×</span> in the input field. To
        evaluate the input and get the result, press the enter button.
      </Typography>
      <Typography variant="h3" id="secondaryandalphafunctions">
        Secondary and alpha functions
      </Typography>
      <Typography variant="body1" paragraph={true}>
        While each button on the screen has a primary functions, many also have a secondary and/or alpha function. For
        example take the{' '}
        <span className={`${styles['button']} ${styles['button-function']}`}>
          x<sup>2</sup>
          <span className={styles['shift']}>&radic;</span>
          <span className={styles['alpha']}>j</span>
        </span>{' '}
        button. When user normally, it will insert the{' '}
        <Link href="/MathsApp/FunctionReference/#square">square operator</Link> into the input. However, by pressing the{' '}
        <Link href="#screenoverview_2nd_key">2nd button</Link>, the secondary function of the button,{' '}
        <Link href="/MathsApp/FunctionReference/#squareroot">square root</Link>, will come to the foreground, making the
        button looking like{' '}
        <span className={`${styles['button']} ${styles['button-function']}`}>
          &radic;
          <span className={styles['shift']}>
            x<sup>2</sup>
          </span>
          <span className={styles['alpha']}>j</span>
        </span>
        . Now, when the button is pressed, the square root operator will be inserted into the input. Similarly, by
        pressing the <Link href="#screenoverview_alpha_key">alpha button</Link>, one is able to insert the variable j
        into the calculation.
      </Typography>
      <Typography variant="h3" id="arithmetic">
        Arithmetic
      </Typography>
      <Typography variant="body1" paragraph={true}>
        The arithmetic operators add{' '}
        <span className={`${styles['button']} ${styles['button-basic-operation']}`}>+</span>, subtract{' '}
        <span className={`${styles['button']} ${styles['button-basic-operation']}`}>
          &minus;<span className={styles['shift']}>&Gamma;</span>
          <span className={styles['alpha']}>z</span>
        </span>
        , multiply{' '}
        <span className={`${styles['button']} ${styles['button-basic-operation']}`}>
          ×<span className={styles['shift']}>!</span>
          <span className={styles['alpha']}>u</span>
        </span>{' '}
        and divide{' '}
        <span className={`${styles['button']} ${styles['button-basic-operation']}`}>
          ÷<span className={styles['alpha']}>p</span>
        </span>{' '}
        can be found to the right of the numeric buttons.
      </Typography>
      <Typography variant="h3" id="subtraction_vs_negation">
        Subtraction vs. negation
      </Typography>
      <Typography variant="body1" paragraph={true}>
        Negative numbers are entered using the negate operator{' '}
        <span className={`${styles['button']} ${styles['button-basic-operation']}`}>
          (-)<span className={styles['alpha']}>q</span>
        </span>
        . It is important not to confuse this with the subtract operator{' '}
        <span className={`${styles['button']} ${styles['button-basic-operation']}`}>
          &minus;<span className={styles['shift']}>&Gamma;</span>
          <span className={styles['alpha']}>z</span>
        </span>
        . As an example, to subtract 5 from 10, one would enter{' '}
        <span className={styles['button-sequence']}>
          <span className={`${styles['button']} ${styles['button-numeric']}`}>
            1<span className={styles['shift']}>i</span>
            <span className={styles['alpha']}>w</span>
          </span>{' '}
          <span className={`${styles['button']} ${styles['button-numeric']}`}>
            0<span className={styles['shift']}>bin</span>
          </span>{' '}
          <span className={`${styles['button']} ${styles['button-basic-operation']}`}>
            &minus;<span className={styles['shift']}>&Gamma;</span>
            <span className={styles['alpha']}>z</span>
          </span>{' '}
          <span className={`${styles['button']} ${styles['button-numeric']}`}>
            5<span className={styles['alpha']}>s</span>
          </span>
        </span>
        . On the other hand, to calculate 5 × -5, one would enter{' '}
        <span className={styles['button-sequence']}>
          <span className={`${styles['button']} ${styles['button-numeric']}`}>
            5<span className={styles['alpha']}>s</span>
          </span>{' '}
          <span className={`${styles['button']} ${styles['button-basic-operation']}`}>×</span>{' '}
          <span className={`${styles['button']} ${styles['button-basic-operation']}`}>
            (-)<span className={styles['alpha']}>q</span>
          </span>{' '}
          <span className={`${styles['button']} ${styles['button-numeric']}`}>
            5<span className={styles['alpha']}>s</span>
          </span>
        </span>
        :
      </Typography>
      <div className={mathsappStyles['example']}>
        <div className={mathsappStyles['description']}>Example: correct usage of the negate and subtract operators</div>
        <div className={mathsappStyles['screen']}>
          <div className={mathsappStyles['input']}>10 &minus; 5</div>
          <div className={mathsappStyles['output']}>5</div>
          <div className={mathsappStyles['input']}>5 × -5</div>
          <div className={mathsappStyles['output']}>-25</div>
        </div>
      </div>
      <Typography variant="body1" paragraph={true}>
        When the negate and subtract operators are used incorrectly, the output will be incorrect or invalid. For
        example, if one would calculate 10 &minus; 5 using the negate operator, MathsApp will interpret this as 10 × -5,
        yielding the result -50. When 5 × -5 is calculated using the subtract operator, MathsApp will tell you that it
        is missing a value, since the subtract operator requires two operands rather than one.
      </Typography>
      <div className={mathsappStyles['example']}>
        <span className={mathsappStyles['description']}>
          Example: incorrect usage of the negate and subtract operators
        </span>
        <div className={mathsappStyles['screen']}>
          <span className={mathsappStyles['input']}>10-5</span>
          <span className={mathsappStyles['output']}>-50</span>
          <span className={mathsappStyles['input']}>5 × &minus; 5</span>
          <span className={`${mathsappStyles['output']} ${styles['error']}`}>Value expected</span>
        </div>
      </div>
      <Typography variant="h3" id="complexnumbers">
        Complex numbers
      </Typography>
      <Typography variant="body1" paragraph={true}>
        In order to enter complex numbers, use the same input mechanism as for regular numbers. You can find the symbol
        i as the 2<sup>nd</sup> function of the{' '}
        <span className={`${styles['button']} ${styles['button-numeric']}`}>
          1<span className={styles['shift']}>i</span>
          <span className={styles['alpha']}>w</span>
        </span>{' '}
        button. As inputting complex numbers regularly requires using the add operator, which has a low priority, do not
        forget to add parentheses in the proper location.
      </Typography>
      <div className={mathsappStyles['example']}>
        <span className={mathsappStyles['description']}>Example: complex number calculations</span>
        <div className={mathsappStyles['screen']}>
          <span className={mathsappStyles['input']}>2 + 4i / 2</span>
          <span className={mathsappStyles['output']}>2 + 2i</span>
          <span className={mathsappStyles['input']}>(2 + 4i) / 2</span>
          <span className={mathsappStyles['output']}>1 + 2i</span>
        </div>
      </div>
      <Typography variant="h2" id="reusingpreviousanswers">
        Reusing previous answers
      </Typography>
      <Typography variant="body1" paragraph={true}>
        Often times, one would like to input a calculation making use of previous answers. MathsApp has several ways of
        doing this. First, the special variable 'Ans' will always contain the last answer. Ans may be inserted by using
        the{' '}
        <span className={`${styles['button']} ${styles['button-basic-operation']}`}>
          Ans<span className={styles['alpha']}>v</span>
        </span>{' '}
        button, or by inserting a postfix or infix operator at the start of a new calculation. For example, pressing{' '}
        <span className={`${styles['button']} ${styles['button-basic-operation']}`}>
          ×<span className={styles['shift']}>!</span>
          <span className={styles['alpha']}>u</span>
        </span>{' '}
        when the input is empty will insert 'Ans ×'.
      </Typography>
      <div className={mathsappStyles['example']}>
        <span className={mathsappStyles['description']}>Example: using the 'Ans' variable</span>
        <div className={mathsappStyles['screen']}>
          <span className={mathsappStyles['input']}>5 × 10</span>
          <span className={mathsappStyles['output']}>50</span>
          <span className={mathsappStyles['input']}>Ans / 2</span>
          <span className={mathsappStyles['output']}>25</span>
        </div>
      </div>
      <Typography variant="body1" paragraph={true}>
        Another way of inserting previous answers into the current calculation is by tapping a previous answer in the
        output. A pop-up will appear displaying information about the anwer. From this pop-up, it is possible to insert
        the value into the current calculation by pressing the 'Insert into calculation' button.
      </Typography>
      <Typography variant="h3" id="variables">
        Variables
      </Typography>
      <Typography variant="body1" paragraph={true}>
        Finally, values may be saved in variables for later use using the{' '}
        <Link href="/MathsApp/FunctionReference/#store">store operator</Link>.
      </Typography>
      <div className={mathsappStyles['example']}>
        <span className={mathsappStyles['description']}>Example: using variables</span>
        <div className={mathsappStyles['screen']}>
          <span className={mathsappStyles['input']}>
            5 × 3 &rarr; <strong>a</strong>
          </span>
          <span className={mathsappStyles['output']}>15</span>
          <span className={mathsappStyles['input']}>
            2 × 7 &rarr; <strong>a</strong>
          </span>
          <span className={mathsappStyles['output']}>14</span>
          <span className={mathsappStyles['input']}>
            <strong>a</strong> + <strong>b</strong>
          </span>
          <span className={mathsappStyles['output']}>29</span>
        </div>
      </div>
      <Typography variant="h2" id="binaryoctalandhexadecimalnumbers">
        Binary, octal and hexadecimal numbers
      </Typography>
      <Typography variant="h3" id="input">
        Input
      </Typography>
      <Typography variant="body1" paragraph={true}>
        To insert binary, octal or hexadecimal numbers into a calculation, the secondary function of{' '}
        <span className={`${styles['button']} ${styles['button-numeric']}`}>
          0<span className={styles['shift']}>bin</span>
        </span>
        ,{' '}
        <span className={`${styles['button']} ${styles['button-numeric']}`}>
          .<span className={styles['shift']}>oct</span>
        </span>
        , or{' '}
        <span className={`${styles['button']} ${styles['button-numeric']}`}>
          Exp<span className={styles['shift']}>hex</span>
        </span>{' '}
        should be used, respectively. When one of these functions is used, a subscript notation shows the base of the
        number that is inputted, and the numeric keys on the keyboard will change accordingly.
      </Typography>
      <Typography variant="h3" id="output">
        Output
      </Typography>
      <Typography variant="body1" paragraph={true}>
        While the output of the scientific calculator is always decimal, the output may always be viewed as a
        binary/octal/hexadecimal number if it is a natural number. To do this, simply tap it in the output. This will
        show a pop-up containing informatino about the output, showing it in binary, octal and hexadecimal notation.
      </Typography>
      <Typography variant="h2" id="lists">
        Lists
      </Typography>
      <Typography variant="body1" paragraph={true}>
        MathsApp also contains a list type, which has the notation {'{'}1, 2, ...{'}'}. A list may contain any number of
        complex numbers, but no other lists or matrices. To enter a list, press the{' '}
        <span className={`${styles['button']} ${styles['button-function']}`}>
          {'{'}L{'}'}
        </span>{' '}
        button. Additional values may be added to the list using the{' '}
        <span className={`${styles['button']} ${styles['button-function']}`}>
          ,<span className={styles['alpha']}>h</span>
        </span>{' '}
        button.
      </Typography>
      <Typography variant="h3" id="overloading">
        Overloading
      </Typography>
      <Typography variant="body1" paragraph={true}>
        While there are many <Link href="/MathsApp/FunctionReference/#listfunctions">list-specific operators</Link>,
        many regular operators may also be used on lists, in which case they will be applied to all items in the list
        separately. This is called operator overloading. When operators are overloaded that require more than one
        parameter, a combination of complex numbers and lists may be used, but when multiple lists are used, they must
        be of equal length.
      </Typography>
      <div className={mathsappStyles['example']}>
        <span className={mathsappStyles['description']}>Example: operator overloading on lists</span>
        <div className={mathsappStyles['screen']}>
          <span className={mathsappStyles['input']}>
            {'{'}1, 2, 3{'}'} × 2
          </span>
          <span className={mathsappStyles['output']}>
            {'{'}2, 4, 6{'}'}
          </span>
          <span className={mathsappStyles['input']}>
            {'{'}1, 2, 3{'}'} × {'{'}(5, 10, 15){'}'}
          </span>
          <span className={mathsappStyles['output']}>
            {'{'}5, 20, 45{'}'}
          </span>
          <span className={mathsappStyles['input']}>
            {'{'}1, 2, 3{'}'} × {'{'}(5, 10){'}'}
          </span>
          <span className={`${mathsappStyles['output']} ${styles['error']}`}>
            Left operand of multiply operator is invalid (expected: complex number, found: list)
          </span>
        </div>
      </div>
      <Typography variant="h2" id="precedencerules">
        Precedence rules
      </Typography>
      Expressions in MathsApp are evaluated taking into account the following precedence rules:
      <ol>
        <li>Parentheses and braces () {}</li>
        <li>Functions</li>
        <li>
          Exponents and post operators <Link href="/MathsApp/FunctionReference/#power">^</Link>,{' '}
          <Link href="/MathsApp/FunctionReference/#factorial">!</Link>,{' '}
          <Link href="/MathsApp/FunctionReference/#transpose">
            <sup>-T</sup>
          </Link>
          ,{' '}
          <Link href="/MathsApp/FunctionReference/#square">
            <sup>2</sup>
          </Link>
          , and{' '}
          <Link href="/MathsApp/FunctionReference/#reciprocal">
            <sup>-1</sup>
          </Link>
        </li>
        <li>
          <Link href="/MathsApp/FunctionReference/#negate">Negate operator (-)</Link>
        </li>
        <li>
          <Link href="/MathsApp/FunctionReference/#multiply">Multiply ×</Link> and{' '}
          <Link href="/MathsApp/FunctionReference/#divide">divide ÷</Link>
        </li>
        <li>
          <Link href="/MathsApp/FunctionReference/#add">Add +</Link> and{' '}
          <Link href="/MathsApp/FunctionReference/#subtract"> subtract &minus;</Link>
        </li>
        <li>
          <Link href="/MathsApp/FunctionReference/#intersection">&cap;</Link>,{' '}
          <Link href="/MathsApp/FunctionReference/#difference">\</Link>, and{' '}
          <Link href="/MathsApp/FunctionReference/#symmetricaldifference">&Delta;</Link>
        </li>
        <li>
          <Link href="/MathsApp/FunctionReference/#store">Store operator &rarr;</Link>
        </li>
      </ol>
      {/*<Typography variant="h2" id="erlangblockingformula">Example: Erlang Blocking formula</Typography>

<Typography variant="body1" paragraph={true}>This section contains an example showing you how you can use MathsApp as efficiently as possible. This example especially shows the power of operator overloading using lists.</Typography>

<Typography variant="h3">Question</Typography>

<Typography variant="body1" paragraph={true}>A cell tower in a communication network has to process two phone calls per minute on average. The call duration has a gamma distribution with an average of 1 minute. The cell tower is able to process at most four calls simultaneously. What is the probability that a phone call will be blocked because the cell tower is overloaded?</Typography>

<Typography variant="h3">Solution</Typography>

<Typography variant="body1" paragraph={true}>To answer this question, one may use the Erlang blocking formula:</Typography>

<img className="formula" src="/Content/Images/erlangb.png" />

<Typography variant="body1" paragraph={true}>Where:</Typography>

<ul>
	<li>&lambda; is the call arrival rate = 2 per minute</li>
	<li>&beta; is the mean call duration = 1 minute</li>
	<li>k is the number of possible simultaneous calls = 4</li>
</ul>

<Typography variant="body1" paragraph={true}>To calculate the answer to this problem with MathsApp, we first store the values to the appropriate variables:</Typography>

<div className={mathsappStyles['example']}>
	<span className={mathsappStyles['input']}>2 &rarr; <strong>l</strong></span>
  <div className={mathsappStyles['screen']}>
    <span className={mathsappStyles['output']}>2</span>
    <span className={mathsappStyles['input']}>1 &rarr; <strong>b</strong></span>
    <span className={mathsappStyles['output']}>1</span>
    <span className={mathsappStyles['input']}>4 &rarr; <strong>k</strong></span>
    <span className={mathsappStyles['output']}>4</span>
  </div>
</div>

<Typography variant="body1" paragraph={true}>Since i in this formula will take on the values {0, 1, ..., k-1, k}, we will store this list of values in i:</Typography>

<div className={mathsappStyles['example']}>
  <div className={mathsappStyles['screen']}>
    <span className={mathsappStyles['input']}>range(0, <strong>k</strong>) &rarr; i</span>
    <span className={mathsappStyles['output']}>{0, 1, 2, 3, 4}</span>
  </div>
</div>

<Typography variant="body1" paragraph={true}>Now we can easily calculate the answer:</Typography>

<div className={mathsappStyles['example']}>
  <div className={mathsappStyles['screen']}>
    <span className={mathsappStyles['input']}>(<strong>lb</strong>)^<strong>k</strong> / <strong>k</strong>! / &Sigma;((<strong>lb</strong>)^<strong>i</strong> / <strong>i</strong>!)</span>
    <span className={mathsappStyles['output']}>0.095238095</span>
  </div>
</div>

  <Typography variant="body1" paragraph={true}>So, the call blocking probability is 9.5%.</Typography>*/}
    </>
  );
}
