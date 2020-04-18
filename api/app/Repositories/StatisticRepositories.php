<?php


namespace App\Repositories;

use App\Models\Direction;
use App\Models\Facultie;
use App\Models\Students;
use App\Repositories\Interfaces\StudentStatisticInterface;

class StatisticRepositories implements StudentStatisticInterface
{
    public function getByFaculty(int $id): array
    {
        $faculty = Facultie::find($id);
        $arr_directions = [];
        $directions = Direction::where('faculties_id', $id)->select('id','name','code')->get();
        foreach ($directions as $direction) {
            array_push($arr_directions, [
                'direction' => [
                    'id' => $direction->id,
                    'name'=>$direction->name,
                    'code' => $direction->code
                ],
                'all' => $this->_countToAll('all',$direction->id),
                'bachelor' => $this->_countToAll('bachelor',$direction->id),
                'spec' => $this->_countToAll('spec',$direction->id),
                'mag' => $this->_countToAll('masters',$direction->id),
            ]);
        }
        return [
            'faculty' => [
                'id' => $faculty->id,
                'name' => $faculty-> name
            ],
            'directions' => $arr_directions
        ];
    }
    private function _countToAll(string $action, $directions): array
    {
        $count = null;
        $training = null;
        $employed = null;
        $activity = null;
        $no_activity = null;
        $education = null;
        $job = null;
        $decree = null;
        $army = null;
        $business = null;
        switch ($action) {
            case "all": {
                $training = "Выпуск";
                $employed = Students::where('directions_id', $directions)
                    ->join('employment', 'students.employment_id', '=', 'employment.id')
                    ->where('employment.employment', 1)->count();
                $count = Students::where('directions_id', $directions)->count();
                $activity = Students::where('directions_id', $directions)
                    ->join('employment', 'students.employment_id', '=', 'employment.id')
                    ->where('employment.specialty', 1)->count();
                $no_activity = Students::where('directions_id', $directions)
                    ->join('employment', 'students.employment_id', '=', 'employment.id')
                    ->where('employment.specialty', 2)->count();
                $education = Students::where('directions_id', $directions)
                    ->where('education', 1)->count();
                $decree = Students::where('directions_id', $directions)
                    ->where('decree', 1)->count();
                $army = Students::where('directions_id', $directions)
                    ->where('army', 1)->count();
                $business = Students::where('directions_id', $directions)
                    ->where('business', 1)->count();
                $job = Students::where('directions_id', $directions)
                    ->where('job', 1)->count();
                break;
            }
            case "bachelor": {
                $training = "Бакалавры";
                $employed = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 1)
                    ->join('employment', 'students.employment_id', '=', 'employment.id')
                    ->where('employment.employment', 1)->count();
                $count = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 1)->count();
                $activity = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 1)
                    ->join('employment', 'students.employment_id', '=', 'employment.id')
                    ->where('employment.specialty', 1)->count();
                $no_activity = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 1)
                    ->join('employment', 'students.employment_id', '=', 'employment.id')
                    ->where('employment.specialty', 2)->count();
                $education = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 1)
                    ->where('education', 1)->count();
                $decree = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 1)
                    ->where('decree', 1)->count();
                $army = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 1)
                    ->where('army', 1)->count();
                $business = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 1)
                    ->where('business', 1)->count();
                $job = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 1)
                    ->where('job', 1)->count();
                break;
            }
            case "masters": {
                $training = "Магистратура";
                $employed = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 3)
                    ->join('employment', 'students.employment_id', '=', 'employment.id')
                    ->where('employment.employment', 1)->count();
                $count = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 3)->count();
                $activity = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 3)
                    ->join('employment', 'students.employment_id', '=', 'employment.id')
                    ->where('employment.specialty', 1)->count();
                $no_activity = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 3)
                    ->join('employment', 'students.employment_id', '=', 'employment.id')
                    ->where('employment.specialty', 2)->count();
                $education = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 3)
                    ->where('education', 1)->count();
                $decree = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 3)
                    ->where('decree', 1)->count();
                $army = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 3)
                    ->where('army', 1)->count();
                $business = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 3)
                    ->where('business', 1)->count();
                $job = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 3)
                    ->where('job', 1)->count();
                break;
            }
            case "spec": {
                $training = "Специалитет";
                $employed = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 2)
                    ->join('employment', 'students.employment_id', '=', 'employment.id')
                    ->where('employment.employment', 1)->count();
                $count = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 2)->count();
                $activity = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 2)
                    ->join('employment', 'students.employment_id', '=', 'employment.id')
                    ->where('employment.specialty', 1)->count();
                $no_activity = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 2)
                    ->join('employment', 'students.employment_id', '=', 'employment.id')
                    ->where('employment.specialty', 2)->count();
                $education = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 2)
                    ->where('education', 1)->count();
                $decree = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 2)
                    ->where('decree', 1)->count();
                $army = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 2)
                    ->where('army', 1)->count();
                $business = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 2)
                    ->where('business', 1)->count();
                $job = Students::where('directions_id', $directions)
                    ->join('directions', 'students.directions_id', '=', 'directions.id')
                    ->where('directions.tranings_id', 2)
                    ->where('job', 1)->count();
                break;
            }
        }
        if ($count != 0) {
            if ($employed != 0) {
                return [
                    'training' => $training,
                    'count' => $count,
                    'employed' => [
                        'num' => $employed,
                        'percent' => round(($employed/$count)*100)
                    ],
                    'employed_activity' => [
                        'num' => $activity,
                        'percent' => round(($activity/$employed)*100)
                    ],
                    'employed_no_activity' => [
                        'num' => $no_activity,
                        'percent' => round(($no_activity/$employed)*100)
                    ],
                    'counting_education' => [
                        'num' => $education,
                        'percent' => round(($education/$count)*100)
                    ],
                    'job' =>[
                        'num' => $job,
                        'percent' => round(($job/$count)*100)
                    ],
                    'decree' => [
                        'num'=>$decree,
                        'percent' => round(($decree/$count)*100)
                    ],
                    'army' => [
                        'num' => $army,
                        'percent' => round(($army/$count)*100)
                    ],
                    'business' => [
                        'num' => $business,
                        'percent' => round(($business/$count)*100)
                    ]
                ];
            }
            return [
                'count' => $count,
                'training' => $training,
                'employed' => [
                    'num' => $employed,
                ],
                'employed_activity' => [
                    'num' => $activity,
                ],
                'employed_no_activity' => [
                    'num' => $no_activity,
                ],
                'counting_education' => [
                    'num' => $education,
                    'percent' => round(($education/$count)*100)
                ],
                'job' =>[
                    'num' => $job,
                    'percent' => round(($job/$count)*100)
                ],
                'decree' => [
                    'num'=>$decree,
                    'percent' => round(($decree/$count)*100)
                ],
                'army' => [
                    'num' => $army,
                    'percent' => round(($army/$count)*100)
                ],
                'business' => [
                    'num' => $business,
                    'percent' => round(($business/$count)*100)
                ]
            ];

        }
        return ['training' => $training, 'message' => 'nothing found!'];
    }
}
