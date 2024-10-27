"use client";
import { Category } from "@/app/interfaces/category";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import RadioQuestions from "./radio-questions";
import TextField from "./text-field";

const NUMBER_OF_QUESTIONS = 5;

interface QuestionData {
  index: number;
  question: string;
  description: string;
  options: {
    label: string;
    value: string;
  }[];
  type: "radio" | "select" | "form";
}

const QUESTIONS = [
  {
    id: 1,
    question: "Let’s get started. Which of these best describes you?",
    description: "We’ll help you get set up based on your business needs.",
    options: [
      { label: "I'm new with this platform", value: "false" },
      { label: "I've used this platform before", value: "true" },
    ],
  },
  {
    id: 2,
    question: " What will you be selling?",
    description:
      "Pick one that best describes your business. We'll help you import your products, customers, and other shop data.",
  },
  {
    id: 3,
    question: "What do you sell?",
    description: "Select up to 5 categories.",
  },
  {
    id: 4,
    question: "Where are you located?",
    description: "This will help us show your business to local customers.",
  },
  {
    id: 5,
    question: "What’s your email address?",
    description: "We’ll use this to send you important updates.",
  },
];

const VIETNAMESE_QUESTIONS: QuestionData[] = [
  {
    index: 1,
    question: "Bắt đầu thôi. Bạn thuộc nhóm nào sau đây?",
    description:
      "Chúng tôi sẽ giúp bạn thiết lập dựa trên nhu cầu kinh doanh của bạn.",
    options: [
      { label: "Tôi mới với nền tảng này", value: "false" },
      { label: "Tôi đã sử dụng nền tảng này trước đây", value: "true" },
    ],
    type: "radio",
  },
  {
    index: 2,
    question: "Bạn sẽ bán gì?",
    description:
      "Chọn một trong số các lựa chọn dưới đây mà phù hợp nhất với doanh nghiệp của bạn. Chúng tôi sẽ giúp bạn nhập sản phẩm, khách hàng và dữ liệu cửa hàng khác.",
    type: "select",
    options: [],
  },

  {
    index: 4,
    question: "Địa chỉ cửa hàng của bạn ở đâu?",
    description:
      "Điều này sẽ giúp chúng tôi thiết lập địa chỉ vận chuyển và hiển thị doanh nghiệp của bạn cho khách hàng địa phương.",
    type: "form",
    options: [],
  },
  {
    index: 5,
    question: "Xác nhận địa chỉ email của bạn",
    description:
      "Chúng tôi đã gửi một email xác nhận đến địa chỉ email của bạn. Vui lòng kiểm tra hộp thư đến của bạn và nhấn vào liên kết xác nhận để tiếp tục.",
    type: "form",
    options: [],
  },
];

interface IOnboardingQuestionsProps {
  categories: Category[];
}

const OnboardingQuestions = ({ categories }: IOnboardingQuestionsProps) => {
  const [question, setQuestion] = React.useState(0);
  const router = useRouter();
  const [anwsers, setAnwsers] = React.useState<any>({});

  const percentageComplete = useMemo(() => {
    return Math.ceil((question * 100) / VIETNAMESE_QUESTIONS.length);
  }, [question]);

  useEffect(() => {
    if (question === VIETNAMESE_QUESTIONS.length) {
      router.push("/shop/create");
    }
  }, [question]);

  return (
    <>
      {question === VIETNAMESE_QUESTIONS.length ? (
        <></>
      ) : (
        // <CreateShopForm
        //   onBack={() => {
        //     if (question > 0) {
        //       setQuestion((prev) => prev - 1);
        //     }
        //   }}
        // />
        <div className="mx-auto h-screen w-2/3 bg-gray-50 py-12">
          <Card className="flex h-full flex-col">
            <CardHeader>
              <Progress className="mb-6" max={100} value={percentageComplete} />
              <CardTitle>{VIETNAMESE_QUESTIONS[question].question}</CardTitle>
              <CardDescription>
                {VIETNAMESE_QUESTIONS[question].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {VIETNAMESE_QUESTIONS[question].type === "select" ? (
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn danh mục sản phẩm muốn bán" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Fruits</SelectLabel> */}
                      {categories.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={category.id.toString()}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              ) : VIETNAMESE_QUESTIONS[question].type === "form" ? (
                <div className="flex flex-col gap-4">
                  <TextField
                    label="Địa chỉ"
                    type={"number"}
                    value={""}
                    onChange={(v) => {
                      console.log(v);
                    }}
                    id={""}
                  />

                  <div className="flex w-full gap-4">
                    <TextField
                      label="Thành phố / Tỉnh"
                      type={"text"}
                      value={""}
                      onChange={(v) => {
                        console.log(v);
                      }}
                      id={""}
                    />
                    <TextField
                      label="Mã bưu chính"
                      type={"text"}
                      value={""}
                      onChange={(v) => {
                        console.log(v);
                      }}
                      id={""}
                    />
                  </div>

                  <TextField
                    label="Số điện thoại"
                    type={"text"}
                    value={""}
                    onChange={(v) => {
                      console.log(v);
                    }}
                    id={""}
                  />
                </div>
              ) : (
                <RadioQuestions
                  id="onboarding-questions"
                  defaultValue="individual"
                  options={VIETNAMESE_QUESTIONS[question].options ?? []}
                  onValueChange={(value) => {
                    console.log(value);
                  }}
                />
              )}
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="ml-auto mt-auto flex gap-4">
                {question > 0 && (
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      if (question > 0) {
                        setQuestion((prev) => prev - 1);
                      }
                    }}
                  >
                    Quay lại
                  </Button>
                )}
                <Button
                  onClick={() => {
                    if (question < VIETNAMESE_QUESTIONS.length) {
                      setQuestion((prev) => prev + 1);
                    }
                  }}
                >
                  Tiếp
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default OnboardingQuestions;
