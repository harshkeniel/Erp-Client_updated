import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport, PdfExport, Group } from '@syncfusion/ej2-react-grids';
import { employeeDetails } from './data';
import { SampleBase } from '../common/sample-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { PropertyPane } from '../common/property-pane';
export class Exporting extends SampleBase {
    toolbarOptions = ['ExcelExport', 'PdfExport', 'CsvExport'];
    gridInstance;
    checkboxObj;
    flag = true;
    dataBound() {
        if (this.flag) {
            this.gridInstance.toolbarModule.toolbar.hideItem(2, true);
            this.flag = false;
        }
    }
    exportQueryCellInfo(args) {
        if (args.column.headerText === 'Employee Image') {
            if (args.name === "excelQueryCellInfo") {
                args.image = { height: 75, base64: args.data["EmployeeImage"], width: 75 };
            }
            else {
                args.image = { base64: args.data["EmployeeImage"] };
            }
        }
        if (args.column.headerText === 'Email ID') {
            args.hyperLink = {
                target: 'mailto:' + args.data["EmailID"],
                displayText: args.data["EmailID"]
            };
        }
    }
    onChanged(args) {
        let fields = ["Employee Image", "Email ID"];
        if (args.checked) {
            this.gridInstance.showColumns(fields, "headerText");
            this.gridInstance.toolbarModule.toolbar.hideItem(2, true);
        }
        else {
            this.gridInstance.hideColumns(fields, "headerText");
            this.gridInstance.toolbarModule.toolbar.hideItem(2, false);
        }
    }
    gridImageTemplate(props) {
        var src = 'src/grid/images/' + props.EmployeeID + '.png';
        return (<div className='image'>
        <img src={src} alt={props.EmployeeID}/>
    </div>);
    }
    gridUrlTemplate(props) {
        var src = 'mailto:${EmailID}' + props.EmailID;
        return (<div className='url'>
      <a href={src}>{props.EmailID}</a>
    </div>);
    }
    template1 = this.gridImageTemplate;
    template2 = this.gridUrlTemplate;
    toolbarClick(args) {
        switch (args.item.text) {
            case 'PDF Export':
                this.gridInstance.pdfExport();
                break;
            case 'Excel Export':
                this.gridInstance.excelExport();
                break;
            case 'CSV Export':
                this.gridInstance.csvExport();
                break;
        }
    }
    render() {
        return (<div className='control-pane'>
        <div className='col-lg-9 control-section'>
          <GridComponent dataSource={employeeDetails} ref={grid => this.gridInstance = grid} toolbar={this.toolbarOptions} allowExcelExport={true} allowPdfExport={true} allowGrouping={true} toolbarClick={this.toolbarClick.bind(this)} dataBound={this.dataBound.bind(this)} excelQueryCellInfo={this.exportQueryCellInfo.bind(this)} pdfQueryCellInfo={this.exportQueryCellInfo.bind(this)} height='350'>
            <ColumnsDirective>
              <ColumnDirective headerText='Employee Image' width='150' template={this.template1} textAlign='Center'></ColumnDirective>
              <ColumnDirective field='FirstName' headerText='Name' width='130'></ColumnDirective>
              <ColumnDirective field='Title' headerText='Designation' width='180'></ColumnDirective>
              <ColumnDirective headerText='Email ID' width='180' template={this.template2}></ColumnDirective>
              <ColumnDirective field='HireDate' headerText='Hire Date' width='120' format='yMd' textAlign='Right'></ColumnDirective>
              <ColumnDirective field='Address' width='180' allowGrouping={false}></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport, PdfExport, Group]}/>
          </GridComponent>
          </div>
          <div className='col-lg-3 property-section'>
                    <PropertyPane title='Properties'>
                    <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
                            <tr>
                                 <td style={{ width: '70%' }}>
                                    <div>Export template column </div>
                                </td>
                                <td style={{ width: '30%', padding: '10px 10px 10px 0px' }}>
                                    <CheckBoxComponent ref={(scope) => { this.checkboxObj = scope; }} checked={true} change={this.onChanged.bind(this)}></CheckBoxComponent>
                                </td>
                            </tr>
                        </table>
                    </PropertyPane>
                </div>
        </div>);
    }
}