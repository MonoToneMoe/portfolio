export interface CardComponentProps {
    src: string;
    title: string;
    icon: {
        icon: JSX.Element;
        iconName: string;
    }[];
    github: string;
    vercel: string;
}
