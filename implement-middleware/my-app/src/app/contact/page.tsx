import Content from '../../components/Content';

const Contact = () => {
    return (
        <Content>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center">
                <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
                <p className="mt-4 text-gray-700">
                    We'd love to hear from you! Please reach out with any questions or feedback.
                </p>
                </div>
            </div>
        </Content>
    )
};
export default Contact;