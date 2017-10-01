'use strict';

// tag::vars[]
// อิมพอร์ต react และ onsen
const React = require('react');
const ReactDOM = require('react-dom');
const ons = require('onsenui');
const Ons = require('react-onsenui');
// อิมพอร์ต client และ api อีก 2 ไฟล์สำหรับใช้จัดการ JSON ที่ Spring-Boot ส่งออกมา
const client = require('./client');
// end::vars[]

// tag::app[]
// ประการ tag <App/> เป็นชิ้นส่วนของ React
class App extends React.Component {

  // ประการ constructor
  constructor(props) {
    super(props);
    // ตัวแปร state ใน React ใช้สำหรับเก็บข้อมูลใด ๆ ที่ต้องการ
    // เราต้องการเก็บ employees (รายการของพนักงาน) ตั้งค่าเริ่มต้นเป็น array ว่าง ([])
    this.state = {employees: []};
  }

  // เมื่อชิ้นส่วนของ React ถูกปักลงบนหน้าเว็บแล้วฟังก์ชัน componentDidMount จะทำงาน
  componentDidMount() {
    // เมื่อทำงาน ให้ทำการ request JSON ไปที่ /api/employees ที่เตรียมไว้ฝั่ง server
    // เพื่อให้ได้ข้อมูล JSON กลับมา
    // เมื่อได้ JSON กลับมาให้บันทึกเก็บไว้ในตัวแปร this.state.employees
    // โดย setState({employees: ...})

    // ถ้าเป็นรายการ entity ชื่อ employees จะดึงได้จาก response.entity._embedded.employees
    // ถ้าเป็นรายการ entity ชื่อ customers ก็จะดึงได้จาก response.entity._embedded.customers เป็นต้น
    client({method: 'GET', path: '/api/employees'}).done(response => {
        this.setState({employees: response.entity._embedded.employees});
    });
  }

  // ฟังก์ชันจัดการ การ click เตรียมไว้เพื่อใช้กับ Ons.ListItem
  // จะรับ employee เข้ามา
  handleClick(employee) {
    // แสดงข้อความ
    ons.notification.alert(employee.description);
  }

  // ฟังก์ชัน render ของชิ้นส่วน React
  render() {
    return (
      // จะสร้าง page และ toolbar โดยแยกการ render ตัว toolbar ไปที่ this.renderToolbar
      // this ตอนนี้เป็น <App/>
      <Ons.Page renderToolbar={this.renderToolbar}>
        <section style={{textAlign: 'center'}}>
          <p>
            <Ons.SearchInput placeholder='Search' />
          </p>
          <p>
            <Ons.Input
              modifier='underbar'
              float
              placeholder='Username' />
          </p>
          <p>
            <Ons.Input
              modifier='underbar'
              type='password'
              float
              placeholder='Password' />
          </p>
          <p>
            <Ons.Button>Add</Ons.Button>
          </p>
        </section>
        <Ons.List
          // ใน page มี list
          // ตั้งค่า dataSource ของ list ให้แสดงรายการ employee
          dataSource={this.state.employees}
          // แต่ละค่าใน dataSource จะกลายเป็น row ใน renderRow
          renderRow={this.renderRow}
          // ส่ง handleClick ไปด้วย เพราะเมื่อเริ่ม render แล้ว
          // this จะเปลี่ยน
          handleClick={this.handleClick} />
      </Ons.Page>
    )
  }

    // ฟังก์ชัน renderToolbar สำหรับวาด toolbar
    renderToolbar() {
      return (
        <Ons.Toolbar>
          <div className='center'>My app</div>
          <div className='right'>
            <Ons.ToolbarButton>
              <Ons.Icon icon='md-face' onClick={() => ons.notification.alert("test") }/>
            </Ons.ToolbarButton>
            <Ons.ToolbarButton>
              <Ons.Icon icon='ion-navicon, material:md-menu'></Ons.Icon>
            </Ons.ToolbarButton>
          </div>
        </Ons.Toolbar>
      )
    }

    // ฟังก์ชัน renderRow จะทำงานทุกครั้งเมื่อ list สั่งวาดข้อมูลจาก dataSource
    // row จะเป็นข้อมูลแต่ละตัวจาก dataSource ในกรณีนี้ dataSource เป็นรายการ employee
    // index เป็นตำแหน่งข้อมูลของ row
    renderRow(row, index) {
      return(
        // โดยจะสร้าง ListItem ให้แต่ละ row
        // this ตอนนี้เป็น Ons.List ไม่ใช่ App
        // เมื่อต้องการกำหนด onClick ให้ ListItem
        // ก็จำเป็นต้อง bind 1. this 2. ค่าที่ต้องการให้กลายไปเป็น employee ของ this.handleClick

        // {row.firstName}&nbsp;{row.lastName} แสดงผล ชื่อ - นามสกุล
        <Ons.ListItem tappable
            key={row._links.self.href}
            data={row}
            onClick={this.handleClick.bind(this, row)}>
            <div className="center">
                {row.firstName}&nbsp;{row.lastName}
            </div>
        </Ons.ListItem>
      )
    }
}
// end::app[]

// tag::render[]
// สั่ง render แท็ก App ไปที่ DOM ชื่อ react
ReactDOM.render(
    <App />,
    document.getElementById('react')
)
// end::render[]
