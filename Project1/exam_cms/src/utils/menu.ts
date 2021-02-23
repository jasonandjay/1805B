import { UserOutlined, LaptopOutlined, NotificationOutlined, BellOutlined, CommentOutlined } from '@ant-design/icons';

export default [{
  name: 'menu.question',
  meta: {
      icon: UserOutlined,
      title: '',
      show: true
  },
  children: [{
      path: '/main/addQuestion',
      name: 'menu.question.addQuestion',
      meta: {
          title: '添加试题',
          show: true,
          view_id: 'main-addQuestions'
      },
  },{
      path: '/main/classifyQuestion',
      name: 'menu.question.classifyQuestion',
      meta: {
          title: '试题分类',
          show: true,
          view_id: 'main-questionsType'
      },
  },{
      path: '/main/questionDetail',
      name: 'menu.question.questionDetail',
      meta: {
          title: '试题详情',
          show: false,
          view_id: 'main-questionsDetail'
      },
  },{
      path: '/main/viewQuestion',
      name: 'menu.question.viewQuestion',
      meta: {
          title: '查看试题',
          show: true,
          view_id: 'main-watchQuestions'
      },
  }]
}
,{
  name: 'menu.user',
  meta: {
      icon: LaptopOutlined,
      title: '用户管理',
      show: true
  },
  children: [{
      path: '/main/addConsumer',
      name: 'menu.user.addUser',
      meta: {
          title: '添加用户',
          show: true,
          view_id: "main-addUser"
      },
  },{
      path: '/main/showConsumer',
      name: 'menu.user.listUser',
      meta: {
          title: '用户展示',
          show: true,
          view_id: "main-showUser"
      },
  }]
},{
  name: '考试管理',
  meta: {
      icon: NotificationOutlined,
      title: '',
      show: true
  },
  children: [{
      path: '/main/addPaper',
      name: '添加考试',
      meta: {
          title: '添加考试',
          show: true,
          view_id: "main-addExam"
      },
  },{
      path: '/main/paperDetail',
      name: '考试详情',
      meta: {
          title: '考试详情',
          show: false,
          view_id: "main-examDetail"
      },
  },{
      path: '/main/paperList',
      name: '试卷列表',
      meta: {
          title: '试卷列表',
          show: true,
          view_id: "main-examList"
      },
  }]
},{
  name: '班级管理',
  meta: {
      icon: BellOutlined,
      title: '班级管理',
      show: true
  },
  children: [{
      path: '/main/classManager',
      name: '班级管理',
      meta: {
          title: '班级管理',
          show: true,
          view_id: "main-grade"
      },
  },{
      path: '/main/roomManager',
      name: '教室管理',
      meta: {
          title: '教室管理',
          show: true,
          view_id: "main-room"
      },
  },{
      path: '/main/studentManager',
      name: '学生管理',
      meta: {
          title: '学生管理',
          show: true,
          view_id: "main-student"
      },
  }]
},{
  name: '阅卷管理',
  meta: {
      icon: CommentOutlined,
      title: '',
      show: true
  },
  children: [{
      path: '/main/markingDetail',
      name: '批卷',
      meta: {
          title: '批卷',
          show: false,
          view_id: "main-examinationPapers"
      },
  },{
      path: '/main/markingList',
      name: '待批班级',
      meta: {
          title: '待批班级',
          show: true,
          view_id: "main-examPaperClassList"
      },
  },{
      path: '/main/markingStudentList',
      name: '学生试卷列表',
      meta: {
          title: '学生试卷列表',
          show: false,
          view_id: "main-examPaperClassmate"
      },
  }]
}];
