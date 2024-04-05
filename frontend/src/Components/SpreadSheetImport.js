import React from 'react';
import { ReactSpreadsheetImport } from 'react-spreadsheet-import';

const SpreadsheetImportComponent = ({ isOpen, onClose, onSubmit, fields }) => {
  return (
    <ReactSpreadsheetImport
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      fields={fields}
      customTheme={{
        components: {
          Button: {
            baseStyle: {
              borderRadius: "full",
            },
            defaultProps: {
              colorScheme: "messenger",
            },
          },
        },
      }}
    />
  );
};

export default SpreadsheetImportComponent;
