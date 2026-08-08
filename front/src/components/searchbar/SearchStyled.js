import styled from 'styled-components';

export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Input = styled.input`
  padding: 0.65rem 1rem;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  color: #f8fafc;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.25s ease;
  min-width: 200px;
  box-sizing: border-box;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
    background: rgba(15, 23, 42, 0.95);
  }
`;

export const Btn = styled.button`
  padding: 0.65rem 1.25rem;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.25s ease;
  color: #ffffff;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(16, 185, 129, 0.4);
    background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BtnRandom = styled(Btn)`
  background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.25);

  &:hover {
    box-shadow: 0 6px 18px rgba(6, 182, 212, 0.4);
    background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%);
  }
`;