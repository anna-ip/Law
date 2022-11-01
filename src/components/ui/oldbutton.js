///////////////////////

// interface LinkButtonProps {
//   to: string;
//   label: React.ReactNode;
//   backgroundcolor?: string;
//   color?: string;
//   width?: string;
// }

// export const LinkButton = ({
//   to,
//   label,
//   backgroundcolor,
//   color,
//   width,
// }: LinkButtonProps) => {
//   return (
//     <StyledLinkBtn
//       to={to}
//       backgroundcolor={backgroundcolor}
//       color={color}
//       width={width}
//       label={label}
//     >
//       {label}
//     </StyledLinkBtn>
//   );
// };

// const StyledLinkBtn = styled(Link)<LinkButtonProps>`
//   /* display: flex;
//   background-color: ${(props) =>
//     props.backgroundcolor ? `${props.backgroundcolor}` : `${black}`};
//   color: ${(props) => (props.color ? `${props.color}` : `${white}`)};
//   height: 60px; */
//   /* width: ${(props) => (props.width ? `${props.width}px` : `${294}px`)}; */
//   /* justify-content: center;
//   align-items: center; */
//   /* border-radius: 50px; */
//   /* margin-top: 15px; */
//   /* font-family: 'Poppins';
//   font-weight: 500;
//   font-size: 20px; */
//   /* text-decoration: none; */
//   cursor: pointer;
// `;

// interface GetStartedLinkProps {
//   children: React.ReactNode;
//   to: string;
// }

// export const GetStartedLink = ({ children, to }: GetStartedLinkProps) => {
//   return (
//     <StyledLink to={to} width='180px'>
//       {children}
//     </StyledLink>
//   );
// };

// const GetStartedButton = styled(NextButton)`
//   border-radius: 50px;
//   color: ${white};
//   text-decoration: none;
//   height: 60px;
//   width: 180px;
//   font-family: 'Poppins';
//   font-weight: 500;
//   font-size: 20px;
//   cursor: pointer;
// `;

// interface StyledButtonProps {
//   onClick: () => void;
//   label: React.ReactNode;
//   backgroundcolor?: string;
//   color?: string;
//   width?: number;
//   type?: ButtonType;
// }

// export const StyledButton = ({
//   onClick,
//   label,
//   backgroundcolor,
//   color,
//   width,
//   type = 'button',
// }: StyledButtonProps) => {
//   return (
//     <StyledBtn
//       type={type}
//       onClick={onClick}
//       backgroundcolor={backgroundcolor}
//       color={color}
//       width={width}
//       label={label}
//     >
//       {label}
//     </StyledBtn>
//   );
// };

// const StyledBtn = styled.button<StyledButtonProps>`
//   /* display: flex;
//   background-color: ${(props) =>
//     props.backgroundcolor ? `${props.backgroundcolor}` : `${black}`};
//   color: ${(props) => (props.color ? `${props.color}` : `${white}`)}; */
//   /* height: 60px; */
//   /* width: ${(props) => (props.width ? `${props.width}px` : '294px')};
//   justify-content: center;
//   align-items: center; */
//   /* border-radius: 50px; */
//   /* margin-top: 15px; */
//   /* font-family: 'Poppins'; */
//   /* font-weight: 500; */
//   /* font-size: 20px; */
//   /* text-decoration: none; */
//   cursor: pointer;
// `;

// interface NotificationBtnProps {
//   children: React.ReactNode;
//   onClick: () => void;
//   inverted?: boolean;
//   fontWeight?: number;
//   marginLeft?: number;
//   width?: string;
//   type?: ButtonType;
// }

// export const NotificationBtn = ({
//   children,
//   onClick,
//   inverted = false,
//   fontWeight,
//   marginLeft,
//   width,
//   type = 'button',
// }: NotificationBtnProps) => {
//   return (
//     <NotificationButton
//       onClick={onClick}
//       inverted={inverted}
//       marginLeft={marginLeft}
//       width={width}
//       type={type}
//     >
//       <NotificationLabel fontWeight={fontWeight} inverted={inverted}>
//         {children}
//       </NotificationLabel>
//     </NotificationButton>
//   );
// };

// const NotificationButton = styled.button<NotificationBtnProps>`
//   display: flex;
//   background-color: ${(props) => (props.inverted ? `${white}` : `${black}`)};
//   width: ${(props) => (props.width ? `${props.width}` : '150px')};
//   height: 60px;
//   width: 200px;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50px;
//   ${(props) =>
//     props.marginLeft && {
//       marginLeft: `${props.marginLeft}px`,
//     }}
//   margin-top: 15px;
//   text-decoration: none;
//   cursor: pointer;
// `;

// const NotificationLabel = styled.p<NotificationBtnProps>`
//   font-family: 'Poppins';
//   font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : 700)};
//   font-size: 16px;
//   color: ${(props) => (props.inverted ? `${black}` : `${white}`)};
// `;
