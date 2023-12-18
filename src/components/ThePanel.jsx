import { PanelMenu } from 'primereact/panelmenu';
import '../css/the-panel.css'

function ThePanel() {
  const items = [
    {
      label: 'About Us',
      items: [
        {
          label: 'Overview'
        },
        {
          label: 'Our Mission'
        },
        {
          label: 'History'
        }
      ]
    },
    {
      label: 'Services',
      items: [
        {
          label: 'Community & Home-Based'
        },
        {
          label: 'Comprehensive Sex Education'
        },
        {
          label: 'Early Childhood'
        },
        {
          label: 'Family Center'
        }
      ]
    },
    {
      label: 'Outcomes',
      items: [
        {
          label: 'Overview'
        },
        {
          label: 'Community Impact'
        }
      ]
    }
  ];

  return (
    <PanelMenu
      model={items}
      style={{ margin: '20px 40px', marginTop: '0px' }}
    />
  );
}

export default ThePanel;
