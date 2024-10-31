import { LineChart , Line,XAxis,YAxis } from 'recharts';

const Linechart = () => {

    const studentMarks = [
        { name: "Alice", physics: 85, chemistry: 88, marks: 85 },
        { name: "Bob", physics: 98, chemistry: 75, marks: 78 },
        { name: "Charlie", physics: 82, chemistry: 94, marks: 92 },
        { name: "David", physics: 97, chemistry: 70, marks: 67 },
        { name: "Eva", physics: 88, chemistry: 90, marks: 88 },
        { name: "Frank", physics: 65, chemistry: 80, marks: 75 },
        { name: "Grace", physics: 85, chemistry: 97, marks: 95 },
        { name: "Hannah", physics: 72, chemistry: 85, marks: 82 },
        { name: "Ian", physics: 70, chemistry: 92, marks: 90 },
        { name: "Julia", physics: 90, chemistry: 70, marks: 72 },
    ];
    
  
    
    
    return (
        <div>
            <LineChart width={800} height={400}data={studentMarks}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
                <Line dataKey="marks"></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                
            </LineChart>
        </div>
    );
};

export default Linechart;