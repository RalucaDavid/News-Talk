import { Modal } from "@mantine/core";
import classes from './custom-modal.module.css';

interface CustomModalProps {
    opened: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const CustomModal = ({ opened, onClose, children, title }: CustomModalProps) => {
    return (
        <Modal classNames={{ content: classes.modalContent, header: classes.modalHeader, title: classes.modalTitle, close: classes.closeButton }}
            opened={opened}
            onClose={onClose}
            title={title}
            centered size={'lg'}>
            {children}
        </Modal>
    );
};

export default CustomModal;