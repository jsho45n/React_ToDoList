import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">전세훈의 일정 관리 앱</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;