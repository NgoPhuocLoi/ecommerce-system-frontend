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
import { Theme } from "@/app/interfaces/themes";
import { getThemes } from "@/actions/themes";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { createShop } from "@/actions/shops";

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
const PLACEHOLDER_IMAGE_URL =
  "https://bc-stencil-production.s3.amazonaws.com/m/55cbfb30-4c33-013d-7a5c-52329bccbb28/large_thumb_screenshot.png";

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
  const [selectedCategoryId, setSelectedCategoryId] = React.useState<
    string | null
  >(null);
  const [suggestedThemes, setSuggestedThemes] = React.useState<Theme[]>([]);
  const [name, setName] = React.useState<string>("");
  const [domain, setDomain] = React.useState<string>("");
  const [selectedThemeId, setSelectedThemeId] = React.useState<string | null>(
    null,
  );

  useEffect(() => {
    const fetchThemes = async () => {
      const themes: Theme[] = await getThemes();
      const suggestedThemes = themes.filter(
        (theme) =>
          theme.recommendedForCategoryId.toString() === selectedCategoryId,
      );
      setSuggestedThemes(suggestedThemes);
      console.log({ suggestedThemes });
    };

    fetchThemes();
    console.log({ selectedCategoryId });
  }, [selectedCategoryId]);

  const percentageComplete = useMemo(() => {
    return Math.ceil((question * 100) / VIETNAMESE_QUESTIONS.length);
  }, [question]);

  // useEffect(() => {
  //   if (question === VIETNAMESE_QUESTIONS.length) {
  //     router.push("/shop/create");
  //   }
  // }, [question]);

  const handleCreateShop = async () => {
    // await createShop()
    const data = {
      name,
      domain,
      themeId: selectedThemeId!,
    };

    await createShop(data);
  };

  return (
    <>
      {question === VIETNAMESE_QUESTIONS.length ? (
        <div className="mx-auto flex h-screen w-1/3 items-center py-12">
          <Card className="mx-auto my-auto flex h-full min-h-[240px] flex-col">
            <CardHeader>
              <CardTitle>Enter your shop details</CardTitle>
              <CardDescription>
                We’ll help you get set up based on your business needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <TextField
                name={"name"}
                label={"Name"}
                id={"create-shop-name"}
                type={"text"}
                value={name}
                onChange={setName}
              />

              <TextField
                name={"domain"}
                label={"Domain"}
                id={"create-shop-domain"}
                type={"text"}
                value={domain}
                onChange={setDomain}
              />
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex w-full justify-between">
                <Button asChild variant={"ghost"}>
                  <Link href={"/"}>Back</Link>
                </Button>

                <Button onClick={handleCreateShop}>Create</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
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
                <div className="flex flex-col gap-4">
                  <Select onValueChange={setSelectedCategoryId}>
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

                  <p>Chủ đề được đề xuất</p>
                  <div className="flex gap-6">
                    {suggestedThemes.map((theme) => {
                      console.log({ theme });
                      return (
                        // <p>{theme.name}</p>
                        <Card
                          onClick={() => {
                            setSelectedThemeId(theme.id.toString());
                          }}
                          key={theme.id}
                          className={clsx(
                            "w-[200px] cursor-pointer p-0 hover:shadow-md",
                            {
                              "border-2 border-black":
                                selectedThemeId === theme.id.toString(),
                            },
                          )}
                        >
                          <CardContent className="p-3">
                            {/* <Link href={`/admin/themes/${theme.id}`}> */}
                            <div className="relative">
                              <Image
                                src={PLACEHOLDER_IMAGE_URL}
                                alt="Theme"
                                width={350}
                                height={450}
                              />
                            </div>
                            {/* </Link> */}
                            <div className="mt-4 flex items-center justify-between">
                              <div
                                className="flex-1"
                                // href={`/admin/themes/${theme.id}`}
                              >
                                <p className="text-lg font-bold">
                                  {theme.name}
                                </p>
                                <p className="text-gray-600">
                                  {theme.description}
                                </p>
                              </div>

                              {/* <ThemeActions themeId={theme.id} /> */}
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
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
