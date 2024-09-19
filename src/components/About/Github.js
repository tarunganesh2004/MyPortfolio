import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

const colourTheme = {
  dark: [
    '#ebedf0',  // No contributions
    '#9be9a8',  // Light green
    '#40c463',  // Medium green
    '#30a14e',  // Darker green
    '#216e39',  // Dark green
  ],
};

function Github() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
        Days I <strong className="yellow">Code</strong>
      </h1>
      <GitHubCalendar
        username="tarunganesh2004"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
