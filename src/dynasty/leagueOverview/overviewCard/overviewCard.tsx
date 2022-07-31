import React from 'react';
import './overviewCard.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface props {
  title: string;
  content: React.ReactNode[];
}

export default function OverviewCard(props: props) {
  return (
    <div className="content-box">
      <div className="teams-card">
        <Card
          sx={{
            boxShadow: '0px 5px 10px 2px rgb(0 0 0 / 25%)',
            borderRadius: 4,
            backgroundImage: 'linear-gradient(333deg, black, white)',
          }}
        >
          <h4 className="teams-header">
            <b>{props.title}</b>
          </h4>
          <CardContent>{props.content}</CardContent>
        </Card>
      </div>
    </div>
  );
}
