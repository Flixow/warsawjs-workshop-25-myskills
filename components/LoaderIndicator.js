const LoaderIndicator = () => (
  <div className="Spinner">
    <div className="Indicator" />
    <style jsx>{`
      .Spinner {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(76,53,113,0.85);
        z-index: 9999;
      }
      .Spinner-local {
        position: relative;
        background-color: rgba(255, 255, 255, 0);
      }

      .Indicator {
        width: 40px;
        height: 40px;
        margin: 100px auto;
        background-color: #fff;

        border-radius: 100%;
        animation: sk-scaleout 1.0s infinite ease-in-out;
      }
      .Spinner-local .Indicator {
        background-color: rgba(76,53,113,0.85);
      }

      @-webkit-keyframes sk-scaleout {
        0% { -webkit-transform: scale(0) }
        100% {
          -webkit-transform: scale(1.0);
          opacity: 0;
        }
      }

      @keyframes sk-scaleout {
        0% {
          -webkit-transform: scale(0);
          transform: scale(0);
        } 100% {
          -webkit-transform: scale(1.0);
          transform: scale(1.0);
          opacity: 0;
        }
      }
    `}</style>
  </div>
);

export default LoaderIndicator;
