import React from 'react';
import Chart from 'react-apexcharts';
import { CardData } from './Components/DashboardData';
import { ReservationsChart } from './Components/ReservationsChart';
import BookingTable from './Components/BookingTable';

const Index = () => {
  return (
    <div className="px-xl-5 px-lg-4 px-3 py-3 page-body">
      <div className="row g-3 mb-3">
        {CardData.map((data, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card">
              <div className="card-header">
                <h6 className="card-title mb-0">{data.title}</h6>
              </div>
              <div className="card-body">
                <h2>{data.value}</h2>
                <span className={`badge ${data.bg_color}`}>{data.per}</span>
                <span className="text-muted"> {data.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Reservations</h6>
            </div>
            <div className="card-body">
              <div id="reservations">
                <Chart
                  options={ReservationsChart}
                  series={ReservationsChart.series}
                  height={ReservationsChart.chart.height}
                  type={ReservationsChart.chart.type}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Today Booking List</h6>
            </div>
            <div className="card-body">
              <BookingTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
