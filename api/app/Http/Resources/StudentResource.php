<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'plans' => $this->plans,
            'employment' => $this->employment,
            'specialty_activity' => $this->specialty_activity,
            'year_graduate' => $this->year_graduate,
            'agreement' => $this->agreement,
            'direction_id' => $this->direction_id,
            'category_id' => $this->category_id
        ];
    }
}
