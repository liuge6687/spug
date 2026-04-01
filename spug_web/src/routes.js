/**
 * Copyright (c) OpenSpug Organization. https://github.com/openspug/spug
 * Copyright (c) <spug.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React from 'react';
import {
  CloudServerOutlined,
  CodeOutlined,
  MonitorOutlined,
  AlertOutlined
} from '@ant-design/icons';

import HostIndex from './pages/host';
import ExecTask from './pages/exec/task';
import ExecTemplate from './pages/exec/template';
import ExecTransfer from './pages/exec/transfer';
import MonitorIndex from './pages/monitor';
import AlarmIndex from './pages/alarm/alarm';
import AlarmGroup from './pages/alarm/group';
import AlarmContact from './pages/alarm/contact';
import WelcomeIndex from './pages/welcome/index';
import WelcomeInfo from './pages/welcome/info';

export default [
  {icon: <CloudServerOutlined/>, title: '主机管理', auth: 'host.host.view', path: '/host', component: HostIndex},
  {
    icon: <CodeOutlined/>, title: '批量执行', auth: 'exec.task.do|exec.template.view', child: [
      {title: '执行任务', auth: 'exec.task.do', path: '/exec/task', component: ExecTask},
      {title: '模板管理', auth: 'exec.template.view', path: '/exec/template', component: ExecTemplate},
      {title: '文件分发', auth: 'exec.transfer.do', path: '/exec/transfer', component: ExecTransfer},
    ]
  },
  {icon: <MonitorOutlined/>, title: '监控中心', auth: 'monitor.monitor.view', path: '/monitor', component: MonitorIndex},
  {
    icon: <AlertOutlined/>, title: '报警中心', auth: 'alarm.alarm.view|alarm.contact.view|alarm.group.view', child: [
      {title: '报警历史', auth: 'alarm.alarm.view', path: '/alarm/alarm', component: AlarmIndex},
      {title: '报警联系人', auth: 'alarm.contact.view', path: '/alarm/contact', component: AlarmContact},
      {title: '报警联系组', auth: 'alarm.group.view', path: '/alarm/group', component: AlarmGroup},
    ]
  },
  {path: '/welcome/index', component: WelcomeIndex},
  {path: '/welcome/info', component: WelcomeInfo},
]
