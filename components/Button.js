import classnames from 'classnames';
import cssVariables from 'utils/cssVariables';

export default ({
  children, className,
  primary, secondary, flat,
  full, size = 'xl',
  red, green, blue,
  ...props
}) => (
  <button
    className={classnames(
      'Button',
      {
        'Button--full': full,

        'Button--primary': primary,
        'Button--secondary': secondary,
        'Button--flat': flat,

        'Button--blue': blue,
        'Button--green': green,
        'Button--red': red,

        [`Button--${size}`]: size,
      },
      className
    )}
    {...props}
  >
    {children}

    <style jsx>{`
      .Button {
        font-family: Lato;
        display: inline-block;
        border-radius: 4px;
        font-weight: 700;
        letter-spacing: 0.3px;
        text-align: center;
        cursor: pointer;
        padding: 14px 36px;
        background: #fff;
        outline: none;
        border: none;
        transition: transform .15s ease;
      }

      .Button:hover {
        transform: translateY(-1px);
        box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
      }

      .Button:active {
        transform: scale(0.95);
      }

      .Button--primary {
        border-color: ${cssVariables.colors.primary.blue};
        color: #fff;
      }
      .Button--primary.Button--green {
        background-color: ${cssVariables.colors.primary.green};
      }
      .Button--primary.Button--blue {
        background-color: ${cssVariables.colors.primary.blue};
      }
      .Button--primary.Button--red {
        background-color: ${cssVariables.colors.secondary.red};
      }

      .Button--secondary {
        background-color: transparent;
        border-color: #fff;
        color: #fff;
        text-transform: uppercase;
        white-space: nowrap;
      }

      .Button--secondary.Button--green {
        box-shadow: inset 0px 0px 0px 2px ${cssVariables.colors.primary.green};
        background-color: ${cssVariables.colors.primary.green}0C;
        color: #000;
      }
      .Button--secondary.Button--blue {
        box-shadow: inset 0px 0px 0px 2px ${cssVariables.colors.primary.blue};
        background-color: ${cssVariables.colors.primary.blue}0C;
        color: ${cssVariables.colors.primary.blue};
      }
      .Button--secondary.Button--red {
        box-shadow: inset 0px 0px 0px 2px ${cssVariables.colors.secondary.red};
        background-color: ${cssVariables.colors.secondary.red}0C;
        color: ${cssVariables.colors.secondary.red};
      }

      .Button--flat {
        font-weight: 600;
        background-color: transparent;
        text-transform: uppercase;
        font-size: 14px;
        padding: 0;
        text-align: left;
      }
      .Button--flat:hover {
        box-shadow: none;
      }
      .Button--flat[disabled] {
        background-color: initial;
      }

      .Button--flat.Button--green {
        color: ${cssVariables.colors.primary.green};
      }
      .Button--flat.Button--blue {
        color: ${cssVariables.colors.primary.blue};
      }
      .Button--flat.Button--red {
        color: ${cssVariables.colors.secondary.red};
      }

      .Button--full {
        width: 100%;
        text-align: center;
      }

      .Button--xxs {
        padding: 0;
      }
      .Button--xs {
        font-size: 12px;
        padding: 5px 20px;
        line-height: 1.2;
      }
      .Button--md {
        font-size: 14px;
        padding: 5px 22px;
        line-height: 1.3;
      }
      .Button--xl {
        font-size: 14px;
        padding: 14px 30px;
        line-height: 1.5;
      }

      .Button[disabled] {
        background-color: ${cssVariables.colors.neutrals[1]}7F;
      }
      .Button[disabled]:hover,
      .Button[disabled]:active,
      .Button[disabled]:focus {
        transform: none;
        box-shadow: none;
        cursor: default;
      }
    `}</style>
  </button>
);
