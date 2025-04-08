import Content from '../../components/Content';

const About = () => {
    return (
        <Content>
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
            <p className="mt-4 text-gray-700">
                We are UGAitems - a useful web program for learning lots about UGA items.
            </p>
            </div>
        </div>
    </Content>
    )
};
export default About;