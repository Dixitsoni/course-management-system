// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'subjects',
  title: 'Subjects',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Physics',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'authentication',
          title: 'Force',
          type: 'collapse',
          target: true,
          children: [
            {
              id: 'collinear',
              title: 'Collinear',
              type: 'item',
              target: true,
              url: '/collinear',
            },
            {
              id: 'forceatangle',
              title: 'Force at Angle',
              type: 'item',
              target: true,
              url: '/forceatangle',
            },
            {
              id: 'forceonbody',
              title: 'Force on Body',
              type: 'item',
              target: true,
              url: '/forceonbody',
            },
            {
              id: 'authentication',
              title: 'Motion',
              type: 'collapse',
              target: true,
              children: [
                {
                  id: 'linearmotion',
                  title: 'Linear Motion',
                  type: 'item',
                  target: true,
                  url: '/linearmotion',
                },
                {
                  id: 'uniformmotion',
                  title: 'Uniform Motion',
                  type: 'item',
                  target: true,
                  url: '/uniformmotion',
                },
                {
                  id: 'rotarymotion',
                  title: 'Rotary Motion',
                  type: 'item',
                  target: true,
                  url: '/rotarymotion',
                },
              ]
            },
          ]
        }
      ]
    },
    {
      id: 'authentication',
      title: 'Chemistry',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: 'Login',
          type: 'item',
          url: '/login',
          target: true
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/register',
          target: true
        }
      ]
    },
    // {
    //   id: 'util-shadow',
    //   title: 'Shadow',
    //   type: 'item',
    //   url: '/utils/util-shadow',
    //   icon: icons.IconKey,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'authentication',
    //   title: 'Mathematics',
    //   type: 'collapse',
    //   icon: icons.IconKey,
    //   children: [
    //     {
    //       id: 'tabler-icons',
    //       title: 'Tabler Icons',
    //       type: 'item',
    //       url: '/icons/tabler-icons',
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'material-icons',
    //       title: 'Material Icons',
    //       type: 'item',
    //       external: true,
    //       target: '_blank',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       breadcrumbs: false
    //     }
    //   ]
    // }
  ]
};

export default utilities;
