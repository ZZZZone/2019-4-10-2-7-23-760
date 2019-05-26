 /*
 起步价是两公里以内6块
 每公里0.8元，八公里起会加收50%的每公里运价
 停车等待时加收每分钟0.25元
 最后计价的时候司机会四舍五入只收整块钱
 */

module.exports = function main(inputs) {
    let {distance, parkTime} = inputs;
    let price = null;
    
    //起步价是两公里以内6块
    let baseDistance = 2;
    let baseFare = 6;

    //停车等待时加收每分钟0.25元
    let parkFarePerMin = 0.25

    // 每公里0.8元，八公里起会加收50%的每公里运价
    let normalFare = 0.8
    let normalDisLimt = 8
    let exceedFare = normalFare * 0.5

    return Math.round(distanceFare(distance) + parkFare(parkTime));

    function distanceFare(distanceKm) { //里程费
    	return baseFare +  // 起步价
    	Math.max(0, distanceKm-baseDistance) * normalFare +  // 基础价
    	Math.max(0, distanceKm-normalDisLimt) * exceedFare;  // 8公里后每公里+50%
    }

    function parkFare(parkTimeMin){ // 等待费
    	return parkTimeMin * parkFarePerMin;
    }

};

