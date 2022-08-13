interface Children {
  children: React.ReactNode;
}

function DeviceDetect({ children }: Children) {
  return (
    <div className="web">
      <div className="mobile">{children}</div>
      <style jsx>
        {`
          .web {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: 100vh;
            background-repeat: no-repeat;
          }
          .mobile {
            position: relative;
            width: 100%;
            height: 100vh;
            max-height: 1000px;
            max-width: 420px;
            margin: auto;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            border-radius: 24px;
          }
        `}
      </style>
    </div>
  );
}

export default DeviceDetect;
