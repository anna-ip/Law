import styled from 'styled-components/macro';
import { DottedLine, green, primaryText } from '../../ui/styles';
import clock from '../../../assets/images/clock-grey.svg';
import { Fragment } from 'react';
import { Total, TotalHours, Hours } from '../../cards/legal/data';

interface LegalTableProps {
  tableData: Array<TotalHours | Total | Hours>;
}

export const LegalTable = ({ tableData }: LegalTableProps) => {
  return (
    <StandardContainer>
      <HeaderWrapper>
        <Title>Standard activities time </Title>
        <LeftContainer>
          <img src={clock} alt='Clock icon' />
          <TotalText>Total activities</TotalText>
          {tableData.map((data: any, index: number) => (
            <TotalTime key={index}>
              {data?.totalHours?.toLocaleString()}
            </TotalTime>
          ))}
          <TotalTime>h</TotalTime>
        </LeftContainer>
      </HeaderWrapper>
      <Table>
        <HeadRow>
          <HeadCell>
            <StyledLabel>Total</StyledLabel>
          </HeadCell>
          <HeadCell>
            <StyledLabel>Complex</StyledLabel>
          </HeadCell>
          <HeadCell>
            <StyledLabel>Routine</StyledLabel>
          </HeadCell>
        </HeadRow>
        {tableData.map((data: any, row: number) => (
          <Fragment key={row}>
            <TableRow>
              <TitleWrapper>
                <TableTitle>{data.title}</TableTitle>
              </TitleWrapper>
              {data.hours?.map((time: any, index: number) => (
                <Row key={index}>
                  {time.total >= 0 && (
                    <Cell>
                      <InputText>{time?.total.toLocaleString()} h</InputText>
                    </Cell>
                  )}
                  {time.complex >= 0 && (
                    <Cell>
                      <InputText>{time?.complex.toLocaleString()} h</InputText>
                    </Cell>
                  )}
                  {time.routine >= 0 && (
                    <Cell>
                      <InputText>{time?.routine.toLocaleString()} h</InputText>
                    </Cell>
                  )}
                </Row>
              ))}
            </TableRow>
          </Fragment>
        ))}
      </Table>
      <DottedLine />
      <TotalContainer>
        <TotalTitle>Risk & OPS </TotalTitle>
        {tableData.map(
          (data: any, index: number) =>
            data.total && (
              <TotalAmount key={index}>
                {data.total.toLocaleString()} MM€
              </TotalAmount>
            )
        )}
      </TotalContainer>
    </StandardContainer>
  );
};

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 230px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: ${primaryText};
  margin-right: 100px;
`;

const StandardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TotalText = styled.p`
  font-size: 16px;
  margin: 0 4px;
  color: ${primaryText};
`;

const TotalTime = styled(TotalText)`
  color: ${green};
  margin: 0 0 0 1px;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
`;

const TotalTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: ${primaryText};
  margin: 0 130px 0 0;
`;

const TotalAmount = styled.h2`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 20px;
  color: ${green};
  margin: 0;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 0;
`;

const HeadRow = styled(Row)`
  padding-left: 215px;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100px;
  margin-right: 54px;
`;

const HeadCell = styled(Cell)`
  justify-content: center;
`;

const TableTitle = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${primaryText};
`;

const TitleWrapper = styled.div`
  width: 180px;
  align-self: center;
  margin-right: 20px;
`;

const StyledLabel = styled.p`
  font-size: 12px;
  color: ${primaryText};
`;

const InputText = styled.p`
  font-size: 1rem;
  color: ${primaryText};
  margin: 0;
`;
